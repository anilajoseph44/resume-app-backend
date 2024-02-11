const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const userRouter=require("./controllers/userroute")
const resumerouter=require("./controllers/resumeroute")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anilasandrajose01:sandrajoseph99@cluster0.vpgykyq.mongodb.net/resumeDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/signup",userRouter)
app.use("/api/resume",resumerouter)


app.listen(3002,()=>{
    console.log("server running......")
})