const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

//get all products
router.get("/products", async (req, res, next)=>{
    try{
        const products = await Store.getProducts()
        res.status(200).json({products})
    }catch(err){
        next(err)
    }
})
//get product by Id
router.get("/products/:productId", async (req, res, next)=>{
    try{
        const productId = req.params.productId
        const product = await Store.getProductsById(productId)
        if(!product){
            throw new NotFoundError("Product Not Found")
        }
        res.status(200).json({ product })
    }catch(err){
        next(err)
    }
})
//create new product
/*router.post("/products", async (req, res, next)=>{
    try{
        const product = req.body.transaction
        const newProduct = await Store.newProduct(product)
        res.status(201).json({ product: newProduct })
    }catch(err){
        next(err)
    }
})*/
module.exports = router