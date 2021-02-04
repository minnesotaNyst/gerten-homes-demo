// This file will contain all of the user-facing routes, such as the homepage and login page.
// For Gerten Homes, this will primarily be used just for the login page...

// the following will set up the main homepage route
const router = require('express').Router();

const sequelize = require('../config/connection');
// !Tony, I think this is where you will call your model...?

const isAuthenticated = require('../config/middleware/isAuthenticated');

// console-log the session variables
router.get('/', (req, res) => {
	console.log(req.session);

	// other logic...
});

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/dashboard');
		return;
	}

	res.render('login');
});

router.get('/dashboard', isAuthenticated, (req, res) => {
	res.render('dashboard');
});

module.exports = router;
