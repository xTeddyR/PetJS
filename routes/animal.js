var models = require("../models");

module.exports = function (app) {
    app.post("/:iduser/addanimal", function (req, res, next) {
        if(req.body.name && req.body.birthday && req.body.category){
            var Animal = models.Animal;
            Animal.create({
                "name": req.body.name,
                "birthday": req.body.birthday,
                "description": req.body.description,
                "user_id_user": req.params.iduser,
                "category_id_category": req.body.category
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
    });
    
    app.delete("/:iduser/:idanimal", function (req, res, next) {
        var Animal = models.Animal;
        var request = {
            "where": {
                id_animal: req.params.idanimal
            }
        }
        Animal.find(request).then(function (result) {
            if(result){
                result.destroy().then(function (suc) {
                    res.json({
                        "code": 0,
                        "result": true
                    });
                }).catch(function (err) {
                    res.json({
                        "code": 2,
                        "message": "Sequelize error"
                    });
                });
            }else{
                res.json({
                    "code": 0,
                    "result": false
                });
            }
        });
    });
    
    app.get("/:iduser/animal", function (req, res) {
        var Animal = models.Animal;
        var request = {
            "where": {
                user_id_user: req.params.iduser
            }
        }
        Animal.findAll(request).then(function (result) {
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
}