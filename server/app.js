var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const admin = require('firebase-admin')

const serviceAccount = require("./config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var app = express();
const port = 3000

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin.auth().verifyIdToken(req.headers.authtoken)
      .then((userInfo) => {
        admin.auth().getUser(userInfo.uid)
        .then(function(userRecord) {
          console.log(userRecord.providerData[0].email);
        })
        next()
      }).catch(() => {
        res.status(403).send('Unauthorized')
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}

app.use('/', checkAuth)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(port, () => {
  console.log(`Weighty server listening at http://localhost:${port}`)
});