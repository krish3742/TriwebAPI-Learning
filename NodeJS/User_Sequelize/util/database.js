const Sequelize = require('sequelize');

const sequelize = new Sequelize("userdata", "root", "krishagrawal", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;