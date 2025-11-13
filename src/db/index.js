const { Sequelize } = require('sequelize');
var config = require('../config/config');

const sequelize = new Sequelize({
    database: config.postgres.database,
    username: config.postgres.username,
    password: config.postgres.password,
    host: config.postgres.host,
    port: config.postgres.port,
    dialect: "postgres",
    dialectOptions: {},
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established');
    } catch (error) {
        console.error('unable to connect:', error);
    }
})();

module.exports = sequelize;