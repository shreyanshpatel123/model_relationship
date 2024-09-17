
const express=require ("express")
const app=express();


const mongoose =require ("mongoose")

const cors=require("cors")
const bodyParser=require("body-parser")
const userRoute=require("./routers/userRoute")

mongoose.connect("mongodb://127.0.0.1:27017/onetomany").then(()=>{
    console.log("database connected ")}
)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors())

app.use("/users",userRoute)
app.listen(8080,()=>{
    console.log("server run in 8080 port")
})
