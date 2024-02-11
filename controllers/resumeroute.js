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

router.get("/view",async(req,res)=>{

    let result=await resumemodel.find()
    .populate("userid","fullname mobilenumber address linkedin statement experience qualification skills projects reference")
    .exec()
    res.json(result)

})

module.exports=router