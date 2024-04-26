const express = require('express')

const router = express.Router()
const uploadimages = require("../controllers/image_uploader")


const {
    getProducts,
    getProduct,
    addProduct,
    editProduct,
    deleteProduct  } = require("../controllers/products")

router.route('/')
.get(getProducts)
.post(uploadimages.fields([{name : "thumbnail",maxCount : 1},
                           {name : "gallery",maxCount : 10}]),addProduct)

router.route('/:product_ID')
.get(getProduct)
.patch(uploadimages.fields([{name : "thumbnail",maxCount : 1},
{name : "gallery",maxCount : 10}]),editProduct)
.delete(deleteProduct)

module.exports = router