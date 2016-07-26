var models = require("../models");

module.exports = function (app) {
	
	app.post("/inscription", function(req, res, next) {
		
		if (req.body.email && req.body.password && req.body.firstname && req.body.lastname && req.body.description) {
			var User = models.User;
			User.create({
				"email" : req.body.email,
				"password" : req.body.password,
				"firstname" : req.body.firstname,
				"lastname" : req.body.lastname,
				"description" : req.body.description
			}).then(function(result){
				res.json({
					"code" : 0,
					"result" : result
				});
			}).catch(function(err){
				res.json({
					"code" : 2,
					"message" : "Sequelize error"
				})
			});
		} else {
			res.json({
				"code" : 1,
				"message" : "Inscription error : Missing required parameaaters"
			})
		}
	});
};