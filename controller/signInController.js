var model = require("../models/signInModel"),
    express= require('express'),
    app=express(),
    ccm;
function controller() {
    ccm = new model();
}

console.log("This is controller");

controller.prototype.post = function (req, res, next) {
    ccm.post(req, function (err, data) {
        res.send(data);
    });
};

module.exports = controller;