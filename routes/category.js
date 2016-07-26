var models = require("../models");

module.exports = function (app) {
    app.get("/category/:idcategory", function (req, res, next) {
        var Category = models.Category;
        var request = {
            "where": {
                id_category: req.params.idcategory
            }
        }
        Category.find(request).then(function (result) {
            res.json({
                "code": 0,
                "result": result
            })
        }).catch(function (err) {
            res.json({
                "code": 2,
                "message": "Sequelize error"
            });
            console.log(err)
        });
    });

    app.post("/category/addcategory", function (req, res, next) {
        if(req.body.name){
            var Category = models.Category;
            Category.create({
                "name": req.body.name
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
            })
        }else{
            res.json({
                "code": 1,
                "message": "Missing parameters"
            })
        }
    });
}