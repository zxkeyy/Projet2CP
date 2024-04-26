const express = require('express')

const router = express.Router()

const {
    getCategories,
    getCategoryProducts,
    addCategory,
    editCategory,
    deleteCategory,  } = require("../controllers/categories")

router.route('/').get(getCategories).post(addCategory)

router.route('/:category_name').get(getCategoryProducts).patch(editCategory).delete(deleteCategory)

module.exports = router