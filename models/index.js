var sequelize = require("./sequelize");
var User = require("./User");
var Animal = require("./Animal");
var Category = require("./Category");
var Post = require("./Post");
var Comment = require("./Comment");
var Amis = require("./Amis");

sequelize.sync();

module.exports = {
    "sequelize": sequelize,
    "User": User,
    "Animal": Animal,
    "Category": Category,
    "Post": Post,
    "Comment": Comment,
    "Amis": Amis
}