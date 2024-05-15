const express = require("express");

const router = express.Router();

const {
  getCategories,
  getCategoryProducts,
  addCategory,
  editCategory,
  deleteCategory,
} = require("../controller/categories");
const {
  protectedRoute,
  verifyIsAdmin,
} = require("../middelwar/protectedRoute");

router.get("/getCategories", protectedRoute, getCategories);
router.post("/addCategories", protectedRoute, verifyIsAdmin, addCategory);

router.get("/getCategorie/:category_name", protectedRoute, getCategoryProducts);
router.patch(
  "/updateCategorie/:category_name",
  protectedRoute,
  verifyIsAdmin,
  editCategory
);
router.delete(
  "/deleteCategorie/:category_name",
  protectedRoute,
  verifyIsAdmin,
  deleteCategory
);

module.exports = router;
