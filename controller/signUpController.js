var model = require("../models/signUpModel"),
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
    ccm.post(req, function (err, data) {
        res.send(data);
    });
};
controller.prototype.get = function (req, res, next) {
    //console.log("req",req);
    ccm.get(req, function (err, data) {
        //console.log(data)
        res.send(data);
    })
};
module.exports = controller;