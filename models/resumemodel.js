const mongoose=require("mongoose")

const resumeSchema=new mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"userentry"
        },
        fullname:{
            type:String,
            required:true
        },
        mobilenumber:{
            type:String,

        },
        address:{
            type:String
        
        },
        linkedin:{
            type:String
        },
        statement:{
            type:String
        },
        experience:{
            type:String
        },
        qualification:{
            type:String
        },
        skills:{
            type:String
        },
        projects:{
            type:String
        },
        reference:{
            type:String
        }
        

    }
)


module.exports=mongoose.model("resume",resumeSchema)