const express= require("express")
const  FirstController =require("../controllers/firstController.js")

 const route = express.Router()

route.get("/",FirstController.getAll)
route.get("/:id",FirstController.getById)
route.delete("/:id",FirstController.deleteProduct)
route.post("/",FirstController.postProduct)



module.exports=route