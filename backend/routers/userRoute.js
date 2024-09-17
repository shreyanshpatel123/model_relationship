// const exppress = require("express");
// const route = exppress.Router();
// const USerController = require("../controllers/userController")

// route.post ("/datasave"  , USerController.DataSave )

// route.get("/displaydata" ,  USerController.DisplayData )


// module.exports = route;


const express=require("express");
const route=express.Router()

const userController=require("../controllers/userController")

route.post("/datasave", userController.DataSave)
route.get("/displaydata",userController.DisplayData)

module.exports=route;