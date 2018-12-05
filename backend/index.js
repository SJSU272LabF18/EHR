
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var session = require('express-session');
// var cookieParser = require('cookie-parser');
var cors = require('cors');
// var morgan = require('morgan');
// var passport = require('passport');
// var requireAuth = passport.authenticate('jwt', {session: false});

// Log requests to console
// app.use(morgan('dev'));
// console.log("here");

//require('./app/routes')(app);
// app.use(passport.initialize());

// Bring in defined Passport Strategy
// require('./config/passport')(passport);

app.use(cors({origin: "http://localhost:3000", credentials: true}));

// app.use(cookieParser('cmpe273_kafka_passport_mongo'))
// app.use(session({
//     secret              : 'cmpe273_kafka_passport_mongo',
//     resave              : false,
//     saveUninitialized   : false,
//     duration            : 60 * 60 * 1000,   
//     activeDuration      :  5 * 60 * 1000
// }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

// var signupController=require('./controllers/signupController');
var loginController=require('./controllers/loginController');
var signupController=require('./controllers/signupController');
var registrationController=require('./controllers/patientRegistrationController');
var paymentController=require('./controllers/paymentController');

var emergencyController = require('./controllers/patientEmergencyController');

var doctorloginController = require('./controllers/doctorLoginController')
var doctorDashboardController = require('./controllers/DoctorDashboardController')
var patientRecordController = require('./controllers/patientRecordController')
//route to handle user registration
// app.post('/signup',signupController.signup);
app.post('/login',loginController.login);
app.post('/doctorlogin',doctorloginController.login);
app.post('/signup',signupController.signup);
app.post('/registration',registrationController.registration);
app.post('/payment',paymentController.payment);

app.get('/getPatients',doctorDashboardController.getpatients);
app.get('/getPrescriptions',doctorDashboardController.getprescriptions);
app.get('/getpatientstatistics',doctorDashboardController.getpatientstatistics);
app.post('/emergency',emergencyController.emergency);
app.post('/patientrecord', patientRecordController.record);

//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001")
module.exports = app;
