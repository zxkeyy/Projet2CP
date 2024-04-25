const category = require("../models/category")

const product = require("../models/product")
const Productsfilter = require("./filter")


//get categories
const getCategories = async(req,res)=>{
    
    try {
        const allCategories = await category.find({})
        res.status(200).json({allCategories})
    } catch (error) {
        res.status(500).send(error)
    
    }
}
//get products from category
const getCategoryProducts = async(req,res)=>{
   
   try {
        const category_name = req.params.category_name
        const isCategory = await category.findOne({name:category_name})
        console.log(isCategory)
        if(!isCategory){
            return res.status(404).json({msg:`category  ${category_name} does not exist`})
        }
        const category_products = await Productsfilter(req.query,category_name)
    
        res.status(200).json({category_products})
   } catch (error) {
        res.status(500).send(error)
   
   }
}
//add category
const addCategory = async(req,res)=>{
    

    try {
        const newCategory = await category.create(req.body)

        res.status(201).json({newCategory})
    } catch (error) {
        res.status(500).send(error)
    
    }
}
//remove category
const deleteCategory = async(req,res)=>{
    
    try {
        const category_name = req.params.name
        const deletedCategory = await category.findOneAndDelete({_id:category_name})

        if(!deletedCategory){
            return res.status(404).json({msg:`category with ${product_ID} does not exist`})
        }

        res.status(200).send({deleteCategory})
    } catch (error) {
        res.status(500).send(error)
    
    }
}
//edit category
const editCategory = async(req,res)=>{
    try {
        const category_name = req.params.name
        const editedCategory = await product.findOneAndUpdate({_id:category_name},req.body,{
        runValidators : true,
        new : true
        })

        if(!editedCategory){
            return res.status(404).json({msg:`category with ${product_ID} does not exist`})
        }

        res.status(200).send({editedCategory})
    } catch (error) {
        res.status(500).send(error)

    }
}

module.exports = {
    getCategories,
    getCategoryProducts,
    addCategory,
    editCategory,
    deleteCategory,
}