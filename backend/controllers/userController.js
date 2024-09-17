// const ProfileModel = require("../models/ProfileModel");
// const profileModel = require("../models/ProfileModel");
// const userModel = require("../models/userModel")
// const DataSav =  async(req , res) => {

//    const { firstName , lastName , Email , userName } = req.body       
       
//       const user = await userModel.create({
//            userName : userName,
//            Email : Email
//       })

//       const profile = profileModel.create({
//           user : user._id,
//           firstName:firstName,
//           lastName:lastName
//       })
    
// res.send("Data Posted")
// } 

//   const DisplayData = async (req , res ) => {
//        const userRes = await ProfileModel.find().populate("user")
//         res.send(userRes)
//   }
// module.exports={
//     DataSave,
//     DisplayData
// }
 const  ProfileModel=require("../models/profileModel")
 const userModel=require("../models/userModel");

const DataSave =async(req,res)=>{
    const {firstName , lastName , Email , userName }=req.body;

    const user=await userModel.create(
        {
            userName:userName,
            Email:Email
        } )
        const Profile=ProfileModel.create({
            user:user._id,
            firstName:firstName,
            lastName:lastName
        })
        //res.send("data save");

        // Send success response with created data
        return res.status(200).json({
            success: true,
            message: "Data saved successfully",
            data: {
                user,
                profile: Profile
            }
        });
    
    }

    
 const DisplayData = async (req , res ) => 
    {       const userRes = await ProfileModel.find().populate("user")
        res.send(userRes)
    }

module.exports={
    DataSave,
    DisplayData
}


 