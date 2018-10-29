var loginSchema = require("./signUpModel"), ccn;

function model() {
    ccn = new loginSchema();
}

console.log("This is Model");
model.prototype.post = function (req, callback) {
    //console.log("req", req.body);

    var data = req.body;
    ccn.get(req, function (err, result) {
        console.log("result", result);
        if(!err) {
            if (result.length > 0) {
                if ((req.body.email === result[0].email) && (req.body.password === result[0].password)) {
                    callback(null, {msg: "Login Successfully"});
                } else {
                    callback(null, {msg: "your email password is incorrect"})
                }
            }
            else {
                callback(null, {msg: "You are not Registered please signUp"});
            }
        }else{
            callback({msg: "Please try again later"},null)
        }
    });
};
module.exports = model;
