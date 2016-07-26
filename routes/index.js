module.exports = function (app) {
    require("./amis")(app);
    require("./user.js")(app);
}