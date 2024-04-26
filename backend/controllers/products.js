const product = require('../models/product')
const fs = require('fs');
const path = require('path');

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

        if(req.files.thumbnail){
        const file = req.files.thumbnail[0]
        const baseThumbnailPath = `${req.protocol}://${req.get('host')}/uploads/images/thumbnails/`
        req.body.thumbnail = `${baseThumbnailPath}${file.filename}`
        }
        
        
        if(req.files.gallery){
            const files = req.files.gallery
            let imagePaths = []
            const baseGalleryPath = `${req.protocol}://${req.get('host')}/uploads/images/gallery/`
            files.map((file)=>{
                imagePaths.push(`${baseGalleryPath}${file.filename}`)
            })
            req.body.gallery = imagePaths

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

    if(!deletedProduct){
        return res.status(404).json({msg:`product with ${product_ID} does not exist`})
    }

    if (deletedProduct.thumbnail) {
        const thumbnailFilename = path.basename(deletedProduct.thumbnail);
        const thumbnailPath = path.join( 'uploads', 'images', 'thumbnails', thumbnailFilename);
        
        
       
            fs.unlink(thumbnailPath,(err)=>{
                if (err) {
                    
                    return res.status(400).json(err);
                  }
            })
        
    }

    if (deletedProduct.gallery) {
        deletedProduct.gallery.map(async (image) => {
            const galleryFilename = path.basename(image);
            const galleryImagePath = path.join('uploads', 'images', 'gallery', galleryFilename);
            fs.unlink(galleryImagePath,(err)=>{
                if (err) {
                    
                    return res.status(400).json(err);
                  }
            })
        
        });
    }


    res.status(200).send({deletedProduct})

    } catch (error) {
        res.status(500).send(error)
    }
}
//edit product
const editProduct = async (req,res)=>{
    try {

        
        if(req.files.thumbnail){
            const file = req.files.thumbnail[0]
            const baseThumbnailPath = `${req.protocol}://${req.get('host')}/uploads/images/thumbnails/`
            req.body.thumbnail = `${baseThumbnailPath}${file.filename}`
            }
            
            
            if(req.files.gallery){
                const files = req.files.gallery
                let imagePaths = []
                const baseGalleryPath = `${req.protocol}://${req.get('host')}/uploads/images/gallery/`
                files.map((file)=>{
                    imagePaths.push(`${baseGalleryPath}${file.filename}`)
                })
                req.body.gallery = imagePaths
    
            }
        
        product_ID=req.params.product_ID
        const editedProduct = await product.findOneAndUpdate({_id:product_ID},req.body,{
        runValidators : true,
        new : true
        })

        if(!editedProduct){
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
