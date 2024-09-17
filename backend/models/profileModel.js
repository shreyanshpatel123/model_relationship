const mongoose = require("mongoose");
 const profileScheme = mongoose.Schema({
      user : {
          type :  mongoose.Schema.Types.ObjectId,
          ref : 'User',
          unique : true
      },  
      firstName : String,
      lastName : String
 })

 module.exports = mongoose.model("Profile" , profileScheme)