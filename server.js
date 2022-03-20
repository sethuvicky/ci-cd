import express from "express"
import {connectdb} from "./config/mongo.js"
let app = express()

connectdb()
app.get("/",(req,res)=>{
    res.send("learning ci cd ")
})

app.listen("3000")

