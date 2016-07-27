var models = require("../models");

module.exports = function (app) {
    app.get("/:iduser/:idanimal/timeline", function (req, res, next) {
        var Posts = models.Post;
        var request = {
            "where" : {
                user_id_user: req.params.iduser,
                animal_id_animal: req.params.idanimal
            },
            order : 'create_time DESC'
        }
        Posts.findAll(request).then(function (result) {
            res.json({
                "code": 0,
                "result": result
            })
        }).catch(function (err) {
            res.json({
                "code": 2,
                "message": "Sequelize error"
            });
        });
    });

    app.post("/:iduser/:idanimal/addpost", function (req, res, next) {
        if(req.body.text){
            var Post = models.Post;
            Post.create({
                "text": req.body.text,
                "user_id_user": req.params.iduser,
                "animal_id_animal": req.params.idanimal
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
            });
        }else{
            res.json({
                "code": 1,
                "message": "Missing required parameters"
            });
        }
    })
}