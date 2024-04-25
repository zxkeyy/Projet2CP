const express = require('express')

const router = express.Router()
const uploadThumbnail = require("../controllers/image_uploader")


const {
    getProducts,
    getProduct,
    addProduct,
    editProduct,
    deleteProduct  } = require("../controllers/products")

router.route('/').get(getProducts).post(uploadThumbnail.single("thumbnail"),addProduct)

router.route('/:product_ID').get(getProduct).patch(editProduct).delete(deleteProduct)

module.exports = router