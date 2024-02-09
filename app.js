const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const userRouter=require("./controllers/userroute")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anilasandrajose01:sandrajoseph99@cluster0.vpgykyq.mongodb.net/studentDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/signup",userRouter)


app.listen(3001,()=>{
    console.log("server running......")
})