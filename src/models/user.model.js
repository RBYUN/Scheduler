const Sequelize = require('sequelize');
const sequelize = require('../db');

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
    username: {
        type: Sequelize.STRING(25),
        allowNull: false
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
        tableName: 'users',
        timestamps: false
    });

module.exports = User;