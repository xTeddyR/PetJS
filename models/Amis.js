var sequelize = require("./sequelize");

module.exports = sequelize.import("amis", function (sequelize, datatypes) {
    return sequelize.define("Amis", {
        id_amis: {
            type: datatypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        animal_id_animal_1: {
            type: datatypes.BIGINT
        },
        animal_id_animal_2: {
            type: datatypes.BIGINT
        }
    }, {
        paranoid: true,
        freezeTableName: true,
        underscored: true
    });
});