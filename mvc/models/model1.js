const mongoose = require ("mongoose")

let model1Shema= new mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discount:Boolean
})

 let firstModel= mongoose.model("products",model1Shema)


 module.exports=firstModel