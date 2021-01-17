var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const cors = require('cors')
const admin = require('firebase-admin')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const serviceAccount = require("./config/fbServiceAccountKey.json")
const mongoURI = require("./config/mongouri.json")

const User = require("./models/User")
const Tracking = require('./models/Tracking')
const Idcounters = require('./models/Idcounters')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var app = express();
const port = 3000

/* app.use(cors({
  origin: 'http://weightyapp.matromero.cl/',
  credentials: true,
})) */

app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(checkAuth)

function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin
      .auth()
      .verifyIdToken(req.headers.authtoken)
      .then((userInfo) => {
        let expiresIn = 60 * 30 * 1000 // 30 min
        admin
        .auth().getUser(userInfo.uid)
        .then(function(userRecord) {
          admin
          .auth()
          .createSessionCookie(req.headers.authtoken, { expiresIn })
          .then(
            (sessionCookie) => {
              const options = { maxAge: expiresIn, httpOnly: true }
              res.cookie("session", sessionCookie, options)
              res.cookie("userdata", { uid: userInfo.uid, mail: userRecord.providerData[0].email},options)
              next()
            }
          )
        })
      }).catch(() => {
        res.status(403).send('Unauthorized')
      })
  }
  else if (req.cookies.session) {
    next()
  }
  else {
    res.status(403).send('Unauthorized')
  }
}

// Routes
app.get('/login', (req, res) => {
  res.json({
    message: 'logged-in'
  })
})

app.get('/logout', (req, res) => {
  res.clearCookie('session')
  res.json({
    message: 'logged-out'
  })
})


// Crear ficha y modificar y obtener ficha

app.get('/profile', (req, res) => {
  const userData = req.cookies.userdata
  let userObject = {};
  User.find({ uid: userData.uid })
  .then((userResponse) => {
    // Si no existe ficha
    if (userResponse === undefined || userResponse.length == 0) { 
      res.json({
        message: "record-not-found"
      })
    }
    else {
      Tracking.find({ uidUser: userData.uid })
      .then((trackingResponse) => {
        res.json({
          message: {
            name: userResponse[0].name,
            mail: userResponse[0].test,
            objective: trackingResponse[0].objective,
            birth: trackingResponse[0].birth,
            sex: trackingResponse[0].sex,
            height: trackingResponse[0].height,
            weightTarget: trackingResponse[0].weightTarget
          }
        })
      })
    }
  })
})

app.post('/profile', (req, res) => {
  const userData = req.cookies.userdata
  User.find({ uid: userData.uid })
  .then((response) => {
    // Solo si no existe el usuario
    if (response === undefined || response.length == 0) { 
      let filter = {collectionName  : 'trackingcounter' }
      let update = {$inc:{counter:1}}
      Idcounters.findOneAndUpdate(filter, update, {useFindAndModify: false})
      .then((updatedCounter) => {
        let trackingCounter = updatedCounter.counter
        //Se crea en db usuario
        console.log(req.body)
        const newProfile = new User({
          uid: userData.uid,
          name: req.body.name,
          mail: userData.mail,
          personalTrackerID: trackingCounter,
          friends: [],
        })
        newProfile.save()
      
        // Se crea en db tracking
        const newRecord = new Tracking({
          id: trackingCounter,
          uidUser: userData.uid,
          entries:[],
          name: req.body.name,
          objective: req.body.objective,
          weightTarget: req.body.weightTarget,
          diet: 0,
          physicalActivity: 0,
          sex: req.body.sex,
          height: req.body.height
        })
        newRecord.save()
        .then(data => {
          res.json({ message: "record-created" })
        })
        .catch(err => {
          res.json({error: err})
        })
      })
      .catch(err => {
        console.log(err)  
      })
    }
    else {
      // Si el usuario ya existe
      res.json({
        message: "record-exists"
      })
    }
  })
})

app.put('/profile/', (req, res) => {
  const userData = req.cookies.userdata
  trackingBeingModified = req.params.id
  let filter = { id : trackingBeingModified }
  let update = req.body
  Tracking.findOneAndUpdate(filter, update, {useFindAndModify: false})
})

// Crear fichas de amigos
app.post('/tracking', (req, res) => {
  const userData = req.cookies.userdata
  let filter = {collectionName  : 'trackingcounter' }
  let update = {$inc:{counter:1}}
  Idcounters.findOneAndUpdate(filter, update, {useFindAndModify: false})
  .then((updatedCounter) => {
    let trackingCounter = updatedCounter.counter
    const newRecord = new Tracking({
      id: trackingCounter,
      uidUser: userData.uid,
      entries:[],
      name: res.body.name,
      objective: res.body.objective,
      weightTarget: res.body.weightTarget,
      diet: 0,
      physicalActivity: 0,
      sex: res.body.sex,
      height: res.body.height
    })
    newRecord.save()
    .then(data => {
      let filter = {uid  : userData.uid }
      let update = {$push:{friends:trackingCounter}}
      User.findOneAndUpdate(filter, update, {useFindAndModify: false})
      .then((res) => {
        console.log(res)
        res.json({ message: "tracking-created" })
      })
    })
    .catch(err => {
      res.json({error: err})
    })
  })
})

app.get('/tracking', (req, res) => {
  const userData = req.cookies.userdata
  User.find({ uid: userData.uid }).then((userRecord) => {
    Tracking.find({ uid: userData.uid, id: { $ne: userRecord.personalTrackerID } }).then((userTrackingsArray) => {
      res.json({ message: userTrackingArray })
    })
  })
})



app.put('/tracking/:id', (req, res) => {
  const userData = req.cookies.userdata
  trackingBeingModified = req.params.id
  let filter = { id : trackingBeingModified }
  let update = req.body
  Tracking.findOneAndUpdate(filter, update, {useFindAndModify: false})
})


// DB Connection
mongoose.connect(mongoURI.url, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected!'))

app.listen(port, () => {
  console.log(`Weighty server listening at port: ${port}`)
});