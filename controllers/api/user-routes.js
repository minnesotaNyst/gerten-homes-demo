const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { User } = require('../../models');

// don't really need this but that's fine...
router.get('/', (req, res) => {
	User.findAll({
		attributes: ['username', 'email']
	})
		.then(dbUserData => res.json(dbUserData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// route to create a user when the signup?? maybe?
// !TONYYYYYYYYYY
router.post('/', (req, res) => {
	// TODO: need to update this post.create to match whatever follow up boss will accept...
	User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	})
		.then(dbUserData => {
			req.session.save(() => {
				req.session.user_id = dbUserData.id;
				req.session.username = dbUserData.username;
				req.session.loggedIn = true;

				res.json(dbUserData);
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// user login route
router.post('/login', (req, res) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(dbUserData => {
		if (!dbUserData) {
			res.status(400).json({ message: 'No user with that email address!' });
			return;
		}

		const validPassword = dbUserData.checkPassword(req.body.password);

		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect password!' });
			return;
		}

		req.session.save(() => {
			// declare session variables
			req.session.user_id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;

			res.json({ user: dbUserData, message: 'You are now logged in!' });
		});
	});
});

// user logout route (destroy the session)
router.post('/logout', (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
