var mongoos = require("mongoose");
var Schema = mongoos.Schema;
var bcrypt=require('bcryptjs');

var userSchema = new Schema({

  method:{
    type:String,
    enum:['local','google'],
    required:true
  },
  local:{
    username: String,
    email:{
      type:String,
      lowercase:true    
    },
    password:{
      type:String
    }
  },
  google:{
    googleID:{type:String},
    email:{
      type:String,
      lowercase:true
    }
  },
  profile:{
    name:{type:String,default:null},
    family:{type:String,default:null},
    avatar:{type:String,default:null}
  }

});
userSchema.pre('save',async function(next){
  if(this.method !=='local'){
    next();
  }
  var salt=await bcrypt.genSalt(15);
    var passwordHashed=await bcrypt.hash(this.local.password,salt);
   
    this.local.password=passwordHashed;
    next();

})

userSchema.methods.isValidPassword=  function(plainPassword){
  try{
     
    //return boolean
    return    bcrypt.compareSync(plainPassword,this.local.password);   //this.password = hashed password
  }
  catch(err){
    throw new Error(err);
  }
}

var user = mongoos.model("user", userSchema);
module.exports = user;
