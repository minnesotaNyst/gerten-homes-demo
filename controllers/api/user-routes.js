const router = require('express').Router();
const sequelize = require('../../config/connection');

// !Tony, we will import your model here...
const { User } = require('../../models');

// !Jake, I added a get route to findAll so we can look at the DB
router.get('/', (req, res) => {
	User.findAll({})
		.then(dbPostData => res.json(dbPostData))
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
		.then(dbPostData => res.json(dbPostData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
