var sequelize = require("./sequelize");

module.exports = sequelize.import("user", function (sequelize, datatypes) {
    return sequelize.define("User", {
        id_user: {
            type: datatypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: datatypes.STRING
        },
        password: {
            type: datatypes.STRING
        },
        firstname: {
            type: datatypes.STRING
        },
        lastname: {
            type: datatypes.STRING
        },
        description: {
            type: datatypes.STRING
        }
    }, {
        paranoid: true,
        freezeTableName: true,
        underscored: true,
        createdAt: "create_time",
        updatedAt: "update_time"
    });
});