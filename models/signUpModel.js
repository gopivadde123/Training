var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    loginSchema = mongoose.model('user_data', new Schema({
        name:String,
        email:String,
        password :String,
       phone_number:String,
        location:String
    },{strict:true}));
function model() {

}

console.log("This is Model");
model.prototype.post = function (req, callback) {
    //console.log("req", req.body);

    var data =req.body;
    loginSchema.create(data,function(err,resultt){
        if(resultt){
             callback(null,{msg:"Record created successfully"});
        }
    });
};
model.prototype.get = function (req, callback) {
    console.log("req");
    loginSchema.find({"email":req.body.email},function(err,result){
        callback(err,result);
    });
};
module.exports = model;
