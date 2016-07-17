var sequelize = require("./sequelize");

module.exports = sequelize.import("animal", function (sequelize, datatypes) {
    return sequelize.define("Animal", {
        id_animal: {
           type: datatypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: datatypes.STRING
        },
        type: {
            type: datatypes.STRING
        },
        birthday: {
            type: datatypes.DATE
        },
        descrption: {
            type: datatypes.STRING
        },
        user_id_user: {
            type: datatypes.BIGINT
        },
        category_id_category: {
            type: datatypes.BIGINT
        }
    }, {
        paranoid: true,
        freezeTableName: true,
        underscored: true
    });
});