var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs');

var app = express();

var DEFAULT_PORT = 8888;
var port = process.env.PORT || DEFAULT_PORT;

app.use(bodyParser.urlencoded({
    "extended": false
}));

require("./routes")(app);

app.get("/", function (req, res) {
    fs.readFile("public/index.html", function (err, data) {
        if(err){
            throw err;
        }
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })
})

app.listen(port, function () {
    console.log("Server started on port " + port);
})