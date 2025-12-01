const Sequelize = require('sequelize');
const sequelize = require('../db');
var config = require('../config/config');

const User = sequelize.define('user', {
    first_name: {
        type: Sequelize.STRING(25),
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING(25),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.CHAR(64),
        allowNull: false
    },
    time: {
        type: Sequelize.DATE,
        allowNull: false
    },
    admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }},
    {
        schema: config.postgres.user.schema,
        tableName: config.postgres.user.tableName,
        timestamps: false
    });

module.exports = User;