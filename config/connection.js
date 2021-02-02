// I created a connection to the db and mysql with my .env file.
// This is where it gets tricky because I have a password enabled,
// so I'm not sure how we are going to collaborate unless !JAKE! I give you that?

const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PW,
		{
			host: 'localhost',
			dialect: 'mysql',
			port: 3306
		}
	);
}

module.exports = sequelize;