// import the models

const User = require('./User');
const Comment = require('./Comment');

// !are there any associations that we can create?
// *comments?

Comment.belongsTo(User, {
	foreignKey: 'user_id'
});

User.hasMany(Comment, {
	foreignKey: 'user_id'
});

module.exports = { User, Comment };
