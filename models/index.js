// import the models

const Post = require('./Post');
const Comment = require('./Comment');
const Video = require('./Video');

// !are there any associations that we can create?
// *comments?

Comment.belongsTo(Post, {
	foreignKey: 'user_id'
});

Post.hasMany(Comment, {
	foreignKey: 'user_id'
});

Comment.belongsTo(Video, {
	foreignKey: 'comment_id'
})

Video.hasMany(Comment, {
	foreignKey: 'comment_id'
})

module.exports = { Post, Comment, Video };
