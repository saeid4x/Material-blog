var mongodb=require('mongodb'),
    mongoose=require('mongoose');
var Schema=mongoose.Schema;

var postSchema=new Schema({
    
    title:{type:String,default:'no_title'},
    body:{type:String,default:'no_body'},
    author:{type:String,default:'no_author'},
    datePosted:{type:String,default:'no_date'},
    category:{type:String,default:'no_category'},
    numBazdid:{type:Number,default:0},
    postImage:{type:String,default:'no_image'}
});

module.exports=mongoose.model('Post',postSchema);