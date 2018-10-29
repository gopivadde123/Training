var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    subSchema = new Schema({
        'user_name':{type:String},
        'password' :{type: String},
        'valid' :{type:String}
    },{strict:true});
module.exports=subSchema;