
var mongodb=require('mongodb'),
    mongoose=require('mongoose'),
    Schema=mongoose.Schema;

var CommentScehma=new Schema({
    post:{type:String,default:null},
    name:{type:String,default:'Guest'},
    website:{type:String,default:'no-site'},
    email:{type:String,default:'no-email'},
    date:{type:String,default:Date.now()},
    avater:{type:String,default:'no-avater'},
    comment:{type:String,default:'no-comment'}
});
module.exports=mongoose.model('Comment',CommentScehma);




 