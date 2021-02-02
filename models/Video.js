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
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
// ******* !Nathan! this is where you'll have to embed the video thumbnail "DataTypes.______"
// ******* This is currently a placeholder
        // video_url: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         isURL: true
        //     }
        // },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'video'
    }
);

module.exports = Video