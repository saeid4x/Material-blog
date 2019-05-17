var mongoos = require("mongoose");
var Schema = mongoos.Schema;

var userSchema = new Schema({
  username: String,
  googleID: String,
  email: String,
  picture: String,
  name:String,
  family: String,
  password: String,
});

var user = mongoos.model("user", userSchema);
module.exports = user;
