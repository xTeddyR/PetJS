var sequelize = require("sequelize");

module.exports = sequelize.import("post", function (sequelize, datatypes) {
    return sequelize.define("Post", {
        id_post: {
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