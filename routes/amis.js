var models = require("../models");

module.exports = function (app) {
    app.post("/:id/:idamis", function (req, res, next) {
        if (req.body.id && req.body.idamis) {
            var Amis = models.Amis;
            Amis.create({
                "animal_id_animal_1": req.body.id,
                "animal_id_animal_2": req.body.idamis
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
        } else {
            res.json({
                "code": 1,
                "message": "Missing required parameters"
            })
        }
    });
    
    app.get("/:id/amis", function (req, res, next) {
        var Amis = models.Amis;
        var request = {
            "where": {
                animal_id_animal_1: req.params.id,
                animal_id_animal_2: req.params.id
            }
        }
        Amis.find(request).then(function (result) {
            res.json({
                "code": 0,
                "result": result
            })
        }).catch(function (err) {
            res.json({
                "code": 2,
                "message": "Sequelize error"
            })
        });
    });
};