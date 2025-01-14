const express= require("express")
const app=express()
const dotenv=require("dotenv")
const cors=require("cors")
const route=require( "./routers/firstRouter.js")
const bodyParser=require("body-parser")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

require("./config/config.js")


app.use("/products",route)
app.listen(4040,()=>{
    console.log("bu app 4040 portunda dinlenilir")
})