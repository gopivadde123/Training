var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
loginSchema = mongoose.model('data', new Schema({
        user_name:String,
        password :String,
        valid :String
    },{strict:true}));
loginSchema1 = mongoose.model('token', new Schema({
    token:String,
},{strict:true}));
function model() {

}

console.log("This is Model");
model.prototype.post = function (req,token, callback) {
    //console.log("req", req.body);

        var data =req.body;
        data.valid ="01-01-2019";
        console.log("resultttttt",data)
        loginSchema.create(data,function(err,resultt){
            if(resultt){
                loginSchema1.create(token,function(err,result){
                    console.log(err);
                    console.log(result);
                    callback(err,result)
                });
            }

        });
};
model.prototype.get = function (req, callback) {
    console.log("req");
    loginSchema.find({},function(err,result){
        callback(err,result);
    });
}
model.prototype.delete = function (req, callback) {
    console.log("req",req.params);

    loginSchema.remove({_id:req.params.id},function(err,result){
        callback(err,result);
    });
}
model.prototype.put = function (req, callback) {
    console.log("req",req.params);

    loginSchema.update({_id:req.params.id},{$set:{user_name:req.body.user_name}},function(err,result){
        callback(err,result);
    });
}
module.exports = model;
