const router = require('express').Router();
const sequelize = require('../../config/connection');

// !Tony, we will import your model here...
const { Post } = require('../../models');

router.post('/', (req, res) => {
	// expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
	// TODO: need to update this post.create to match whatever follow up boss will accept...
	Post.create({
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
