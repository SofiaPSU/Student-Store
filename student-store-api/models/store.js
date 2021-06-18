const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store{
    static async getProducts(){
        const products = storage.get("products").value()
        return products
    }

    static async getProductsById(id){
        const productId = storage.get("products").find({id: Number(id)}).value()
        return productId
    }
    static async newProduct(product){
        if (!product){
            throw new BadRequestError(`No product was added`)
        }
        const requiredFields = ["name", "category", "image","price","description"]
        requiredFields.forEach((field) =>{
            if(!product[field] && product[field] !== 0){
                throw new BadRequestError(`Field:"${field}" is required to add a product`)
            }
        })
        const products = await Store.getProducts()
        const productId = products.length + 1
        const newProduct = { id: productId, ...product}

        storage.get("products").push(newProduct).write()
        return newProduct
    }
}
module.exports = Store