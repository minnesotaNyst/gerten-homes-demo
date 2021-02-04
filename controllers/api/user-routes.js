const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { User } = require('../../models');

router.get('/', (req, res) => {
	User.findAll({
		// attributes: ['username', 'email']
	})
		.then(dbUserData => res.json(dbUserData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// create a new user
// !JAKE DO THIS
router.post('/', (req, res) => {
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
		console.log(req);
		if (!dbUserData) {
			res.status(400).json({ message: 'No user with that email address!' });
			return;
		}

		const validPassword = dbUserData.checkPassword(req.body.password);

		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect password!' });
			return;
		}

		// !Do we need to wrap this in and if statement? So...if validPassword then start the session?
		req.session.save(() => {
			// declare session variables
			req.session.user_id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;
			//res.json(req.user)
			res.json({ user: dbUserData, message: 'You are now logged in!' });
			console.log('======LOGGED IN======');
		});
	});
});

// user logout route (destroy the session)
router.post('/logout', (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
		res.json({ message: 'You are now logged out!' });
		console.log('======LOGGED OUT======');
	} else {
		res.status(404).end();
	}
});

module.exports = router;
