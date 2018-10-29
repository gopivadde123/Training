var express = require("express");
var MongoClient = require('mongoose');
var url = "mongodb://localhost:27017/UserData";
var config = require("./config/config");
var bodyParser = require('body-parser');
var app = express();

MongoClient.connect(url,{useNewUrlParser:true});
app.use(function(req,res,next){
    if (req.url.substr(-1) === '/') {
        res.send("Welcome vamsi and have a nice day!!!!!!!!");
    }
    next();
});
app.use(bodyParser.json({limit :'1000mb', extend:true}),
    bodyParser.urlencoded({limit:'1000mb',extend: true}));
app.listen(config.port);
app.use("/v1",require("./routes"));
module.exports =app;