var models = require("../models");

module.exports = function (app) {
    app.post("/:iduser/:idanimal/addcomment", function (req, res, next) {
        if (req.body.idpost && req.body.text) {
            var Comment = models.Comment;
            Comment.create({
                "text": req.body.text,
                "user_id_user": req.params.iduser,
                "animal_id_animal": req.params.idanimal,
                "post_id_post": req.body.idpost
            }).then(function (result) {
                res.json({
                    "code": 0,
                    "result": result
                });
            }).catch(function (err) {
                res.json({
                    "code": 2,
                    "message": "Sequelize Error"
                });
                console.log(err);
            });
        }else{
            res.json({
                "code": 1,
                "message": "Missing required parameters"
            });
        }
    });
}