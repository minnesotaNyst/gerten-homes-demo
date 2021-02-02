const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class User extends Model {}

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
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
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
		modelName: 'user'
	}
);

module.exports = User;
