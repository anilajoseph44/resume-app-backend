const express=require("express")
const usermodel=require("../models/usermodel")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashpasswordgenerator=async(pswd)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pswd,salt)

}

router.post("/add",async(req,res)=>{

    let {data}={"data":req.body}
    let password=data.password

    hashpasswordgenerator(password).then(
        (hashedpassword)=>{
            console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
            let user=new usermodel(data)
            let result=user.save()
            res.json(
                {
                    status:"success"
                }
            )
            
        }
    )

    

})


router.post("/signin",async(req,res)=>{

    let email=req.body.email
    let data=await usermodel.findOne({"email":email})
    if(!data)
    {
        return res.json(
            {
                status:"invalid user"
            }
        )
    }

    let dbpassword=data.password
    let inputpassword=req.body.password

    const match=await bcrypt.compare(inputpassword,dbpassword)
    if(!match)
    {
        res.json(
            {
                status:"Incorrect password"
            }
        )
    }

    res.json(
        {
            status:"success"
        }
    )



})


module.exports=router