const { Comment } = require('../models');

const commentdata = [
	{
		comment_text: 'Nunc rhoncus dui vel sem.',
		user_id: 2,
		// username: 'sgerten2'
		// post_id: 1
	},
	{
		comment_text:
			'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
		user_id: 6,
		// username: 'sgerten6'
		// post_id: 8
	},
	{
		comment_text: 'Aliquam erat volutpat. In congue.',
		user_id: 3,
		// username: 'sgerten3'
		// post_id: 10
	},
	{
		comment_text:
			'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		user_id: 4,
		// username: 'sgerten4'
		// post_id: 18
	},
	{
		comment_text: 'In hac habitasse platea dictumst.',
		user_id: 5,
		// username: 'sgerten5'
		// post_id: 5
	},
	{
		comment_text: 'Vivamus vestibulum sagittis sapien.',
		user_id: 1,
		// username: 'sgerten1'
		// post_id: 20
	}
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
