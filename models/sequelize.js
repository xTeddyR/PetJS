var Sequelize = require("sequelize");

module.exports = new Sequelize("petjs", "root", "root", {
    pool: false,
    host:"localhost",
    port:3306
});