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
		survey_query: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [80]
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
