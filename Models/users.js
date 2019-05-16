var mongoos=require('mongoose');
var Schema=mongoos.Schema;

var userSchema=new Schema({
    username:String,
    googleID:String
});

var user=mongoos.model('user',userSchema);
module.exports=user;