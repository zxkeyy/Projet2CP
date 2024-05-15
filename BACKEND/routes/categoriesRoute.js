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

router.get("/", getCategories);
router.post("/", protectedRoute, verifyIsAdmin, addCategory);

router.get("/:category_name", getCategoryProducts);
router.patch(
  "/:category_name",
  protectedRoute,
  verifyIsAdmin,
  editCategory
);
router.delete(
  "/:category_name",
  protectedRoute,
  verifyIsAdmin,
  deleteCategory
);

module.exports = router;
