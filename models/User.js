const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our Post model
class User extends Model {
	// set up method to run on instance data (per user) to check password
	checkPassword(newUserData) {
		// console.log(newUserData);
		// console.log(bcrypt.hashSync(this.password, bcrypt.genSaltSync(10)));
		return bcrypt.compareSync(
			newUserData,
			bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
		);
	}
}

// user.checkPassword
// user.addHook
// create fields/columns for Post model
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4]
			}
		},
		survey_query: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				max: {
					args: 80,
					msg: 'Please use a maximum of 80 characters'
				}
			}
		}
	},
	{
		// hooks: {
		// 	// set up beforeCreate lifecycle "hook" functionality
		// 	async beforeCreate(newUserData) {
		// 		newUserData.password = await bcrypt.hash(newUserData.password, 10);
		// 		return newUserData;
		// 	},

		// 	async beforeUpdate(updatedUserData) {
		// 		updatedUserData.password = await bcrypt.hash(
		// 			updatedUserData.password,
		// 			10
		// 		);
		// 		return updatedUserData;
		// 	}
		// },
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: 'user'
	}
);

module.exports = User;

/*
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

module.exports = function (sequelize, DataTypes) {
	// create our Post model
	// class User extends Model {
	// 	// set up method to run on instance data (per user) to check password
	// 	// checkPassword(loginPw) {
	// 	// 	return bcrypt.compareSync(loginPw, this.password);
	// 	// }
	// }
	// create fields/columns for Post model
	const User = sequelize.define(
		'User',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [4]
				}
			},
			survey_query: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					max: {
						args: 80,
						msg: 'Please use a maximum of 80 characters'
					}
				}
			}
		},
		{
			sequelize,
			timestamps: true,
			freezeTableName: true,
			underscored: true,
			tableName: 'user'
		}
	);

	// checking for unhashed password entered user
	// comparing to hashed password stored in database
	User.prototype.checkPassword = function (password) {
		return bcrypt.compareSync(password, this.password);
	};
	// before user account created password automatically hashed
	User.addHook('beforeCreate', user => {
		user.password = bcrypt.hashSync(
			user.password,
			bcrypt.genSaltSync(10),
			null
		);
	});
	return User;
};*/
