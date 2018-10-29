var model = require("../models/logInModel"),
    express= require('express'),
    app=express(),
    ccm,
    jwt= require('jsonwebtoken');

app.set('secretKey','Training');
function controller() {
    ccm = new model();
}

console.log("This is controller");

controller.prototype.post = function (req, res, next) {
    var token;

    if(req.body){
        token=jwt.sign(req.body, app.get('secretKey'));

    }
    jwt.verify(token, app.get('secretKey'), function (err,data) {
        console.log(err,data);
    })
    ccm.post(req,{token:token}, function (err, data) {


        res.send(data);
    });
}

/*controller.prototype.get = function (req, res, next) {
    //console.log("req",req);
    ccm.get(req, function (err, data) {
        //console.log(data)
        res.send(data);
    })
};*/
controller.prototype.delete = function (req, res, next) {
    //console.log("req",req);
    ccm.delete(req, function (err, data) {
        //console.log(data)
        res.send(data);
    })
};
controller.prototype.put = function (req, res, next) {
    //console.log("req",req);
    ccm.put(req, function (err, data) {
        //console.log(data)
        res.send(data);
    })
};
module.exports = controller;