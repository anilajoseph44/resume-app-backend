const mongoose=require("mongoose")

const userschema=new mongoose.Schema(
    {

        name:String,
        mobno:String,
        age:String,
        email:String,
        password:String

    }
)

module.exports=mongoose.model("userentry",userschema)