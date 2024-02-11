const express=require("express")

const resumemodel=require("../models/resumemodel")


const router=express.Router()


router.post("/create",async(req,res)=>{

    let data=req.body
    let post=new resumemodel(data)
    let result=await post.save()
    res.json(
        {
            status:"success"
        }
    )

})

module.exports=router