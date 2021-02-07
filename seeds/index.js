const seedUser = require('./user-seeds');
const seedComment = require('./comment-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log('\n----- DATABASE SYNCED -----\n');
	await seedUser();
	console.log('\n----- POST SEEDED -----\n');
	await seedComment();
	console.log('\n----- COMMENTS SEEDED -----\n');

	process.exit(0);
};

seedAll();
