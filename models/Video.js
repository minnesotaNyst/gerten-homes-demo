const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Video extends Model { }

Video.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Video