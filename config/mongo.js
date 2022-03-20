import mongoose from "mongoose"

export let connectdb = async()=>{

    await mongoose.connect("mongodb+srv://sethuvicky:sethuvicky@cluster0.206kf.mongodb.net/myFirstDatabase").then(()=>{
        console.log("mongodb connected")
    }).catch((err)=>{
        console.log(err)
    })
}
