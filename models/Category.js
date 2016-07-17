var sequelize = require("./sequelize");

module.exports = sequelize.import("category", function (sequelize, datatypes) {
    return sequelize.define("Category", {
        id_category: {
            type: datatypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: datatypes.STRING
        }
    }, {
        paranoid: true,
        freezeTableName: true,
        underscored: true
    });
});