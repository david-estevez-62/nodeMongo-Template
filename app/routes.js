var User = require('../models/users');

module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('index.ejs');
	});

	app.get('/login', function(req, res){
		res.render('login.ejs', {message: req.flash('loginMessage')})
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/useracct',
		failureRedirect: '/login',
		failureFlash: true
	}));

	app.get('/signup', function(req, res){
		res.render('signup.ejs', {message: req.flash('signupMessage')});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	app.get('/useracct', isLoggedIn, function(req, res){
		res.render('useracct.ejs', {user: req.user})
	})

};



function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login')
}