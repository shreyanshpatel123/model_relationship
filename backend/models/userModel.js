const mongoose = require("mongoose");
const userSchema  = new mongoose.Schema({
    Email:String ,
    userName : String
})
 
module.exports = mongoose.model("User" , userSchema);