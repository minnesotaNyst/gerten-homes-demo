const router = require('express').Router();
const sequelize = require('../../config/connection');

// !Tony, we will import your model here...
const { User } = require('../../models');

// !Jake, I added a get route to findAll so we can look at the DB
router.get('/', (req, res) => {
	User.findAll({
		attributes: { exclude: ['password'] }
	})
		.then(dbUserData => res.json(dbUserData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST https://api.followupboss.com/v1/events
router.post('/', (req, res) => {
	// TODO: need to update this post.create to match whatever follow up boss will accept...
	User.create({
		title: req.body.title,
		post_url: req.body.post_url,
		user_id: req.body.user_id
	})
		.then(dbUserData => res.json(dbUserData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post('/login', (req, res) => {

	// expects {email: 'bill@gmail.com', password: 'password1234'}
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(dbUserData => {
		if (!dbUserData) {
			res.status(400).json({ message: 'No user with that email address! ' });
			return;
		}

		//verify user
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

module.exports = router;
