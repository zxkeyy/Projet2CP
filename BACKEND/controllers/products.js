const product = require('../models/product')

const Productsfilter = require('./filter')
//TODO

// getall products
const getProducts = async (req,res)=>{
    try {
        const Products = await Productsfilter(req.query)
        res.status(200).json({Products})
    } catch (error) {
        res.status(500).send(error)

    }
}
// getsingle product
const getProduct = async(req,res)=>{
    try {
        const product_ID = req.params.product_ID
    const Product = await product.findOne({_id:product_ID})
    
    if(!Product){
        return res.status(404).json({msg:`product with ${product_ID} does not exist`})
    }
    
    res.status(200).json({Product})
        
    } catch (error) {
        res.status(500).send(error)
    }
    
}
//add product
const addProduct = async (req,res)=>{
    try {
        
        const file = req.file
       
        if(file){
        const basePath = `${req.protocol}://${req.get('host')}/uploads/images/`
        console.log(basePath)
        req.body.thumbnail = `${basePath}${file.filename}`
        }
        
        const newProduct = await product.create(req.body)
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).send(error)

    }
}
//remove product
const deleteProduct = async (req,res)=>{
    try {
        
        const product_ID = req.params.product_ID
    const deletedProduct = await product.findOneAndDelete({_id:product_ID})

    if(!product){
        return res.status(404).json({msg:`product with ${product_ID} does not exist`})
    }

    res.status(200).send({deletedProduct})

    } catch (error) {
        res.status(500).send(error)
    }
}
//edit product
const editProduct = async (req,res)=>{
    try {
        const product_ID = req.params.product_ID
        const editedProduct = await product.findOneAndUpdate({_id:product_ID},req.body,{
        runValidators : true,
        new : true
        })

        if(!product){
            return res.status(404).json({msg:`product with ${product_ID} does not exist`})
        }

        res.status(200).send({editedProduct})
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports ={
    getProducts,
    getProduct,
    addProduct,
    editProduct,
    deleteProduct   
}
