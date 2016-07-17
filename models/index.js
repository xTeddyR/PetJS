var sequelize = require("sequelize");
var User = require("User.js");
var Animal = require("Animal.js");
var Category = require("Category.js");
var Post = require("Post.js");
var Comment = require("Comment.js");
var Amis = require("Amis.js");

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