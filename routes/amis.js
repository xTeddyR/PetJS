var models = require("../models");

module.exports = function (app) {
    app.post("/:iduser/:idanimal/addamis", function (req, res, next) {
        if (req.body.idpet) {
            var Amis = models.Amis;
            Amis.create({
                "animal_id_animal_1": req.body.idpet,
                "animal_id_animal_2": req.params.idanimal
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
    
    app.get("/:iduser/:idanimal/amis", function (req, res, next) {
        var Amis = models.Amis;
        var request = {
            "where": {
                $or: [
                    {
                        animal_id_animal_1: req.params.idanimal
                    }, {
                        animal_id_animal_2: req.params.idanimal
                    }
                ]
            }
        }
        Amis.findAll(request).then(function (result) {
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