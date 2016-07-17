var sequelize = require("./sequelize");

module.exports = sequelize.import("comment", function (sequelize, datatypes) {
    return sequelize.define("Comment", {
        id_comment: {
            type: datatypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: datatypes.STRING
        },
        user_id_user: {
            type: datatypes.BIGINT
        },
        animal_id_animal: {
            type: datatypes.BIGINT
        }
    }, {
        paranoid: true,
        freezeTableName: true,
        underscored: true
    });
});