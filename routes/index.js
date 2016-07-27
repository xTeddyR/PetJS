module.exports = function (app) {
    require("./amis")(app);
    require("./animal")(app);
    require("./category")(app);
    require("./user.js")(app);
    require("./posts.js")(app);
    require("./comment")(app);
}