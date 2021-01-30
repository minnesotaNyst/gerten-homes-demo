// This file will contain all of the user-facing routes, such as the homepage and login page.

// the following will set up the main homepage route
const router = require('express').Router();

// !Tony, I think this is where you will call your model...?
// const { Post, User, Comment } = require('../models');

router.get('/login', (req, res) => {
	res.render('login');
});
