var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const cors = require('cors')
const admin = require('firebase-admin')
const mongoose = require('mongoose')

const serviceAccount = require("./config/fbServiceAccountKey.json")
const mongoURI = require("./config/mongouri.json")

const User = require("./models/User")
const Tracking = require('./models/Tracking')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var app = express();
const port = 3000

app.use(cors({
  origin: 'http://192.168.100.9:8080',
  credentials: true,
}))
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
              console.log(sessionCookie)
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
        console.log(trackingResponse)
        res.json({
          message: {
            name: userResponse[0].name,
            mail: userResponse[0].test,
            objective: trackingResponse[0].objective,
            weightTarget: trackingResponse[0].weightTarget,
            diet: trackingResponse[0].diet,
            physicalActivity: trackingResponse[0].physicalActivity,
            birth: trackingResponse[0].birth,
            sex: trackingResponse[0].sex,
            height: trackingResponse[0].height
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
      //Se crea en db usuario
      const newProfile = new User({
        uid: userData.uid,
        name: "Matias Romero",
        mail: userData.mail,
        personalTrackerID: "1",
        friends: [],
      })
      newProfile.save()
      
      // Se crea en db tracking
      const newRecord = new Tracking({
        id: 1,
        uidUser: userData.uid,
        entries:[],
        name: "Matias",
        bond: "",
        objective: 2,
        weightTarget: 60,
        diet: 5,
        physicalActivity: 2,
        sex: 1,
        height: 160
      })
      newRecord.save()

      // Respuesta
      .then(data => {
        message: "record-created"
      })
      .catch(err => {
        res.json({error: err})
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


// DB Connection
mongoose.connect(mongoURI.url, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected!'))



app.listen(port, () => {
  console.log(`Weighty server listening at http://localhost:${port}`)
});