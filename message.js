const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
 user:{
   type:String,
   required:true
 },
 text:
 {
  type:String,
  required:true
 }
 

},
  {
   timestamps:true
 })

 const userModel = mongoose.model('User', userSchema);

 module.exports.model=userModel