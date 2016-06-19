var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var ejs = require('ejs');

var configDB = require('./config/database.js')


mongoose.connect(process.env.MONGOLAB_URI || configDB.url);
require('./config/passport')(passport);


var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static(__dirname+'/public'));

//app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



require('./app/routes.js')(app, passport);



var server = app.listen(process.env.PORT || 6591, function () {
  console.log('Express server listening on port ' + server.address().port);
});