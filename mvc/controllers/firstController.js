const firstModel= require("../models/model1.js");

 const FirstController = {
    getAll: async (req, res) => {
        let products = await firstModel.find()
        res.send(products)
    },
    getById: async (req, res) => {
        let id = req.params.id
        let myproduct = await firstModel.findById(id)
        res.send({
            message: "Success GetById",
            data: myproduct
        })
    },
    deleteProduct: async (req, res) => {
        let { id } = req.params
        await firstModel.findByIdAndDelete(id)
        res.send({
            message: "Success Delete",
        })
    },
    postProduct: async (req, res) => {
        let newProduct=firstModel(req.body)
        await newProduct.save()
        res.send({
            message:"Success Post",
            data:req.body
          })
    },

}



module.exports=FirstController