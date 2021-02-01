// import the models

const Post = require('./Post');
const Comment = require('./Comment');

// !are there any associations that we can create?
// *comments?

Comment.belongsTo(Post, {
	foreignKey: 'user_id'
});

Post.hasMany(Comment, {
	foreignKey: 'user_id'
});

module.exports = { Post, Comment };
