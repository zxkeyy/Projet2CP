const express = require("express");

const router = express.Router();
const uploadimages = require("../controller/image_uploader");
const {
  protectedRoute,
  verifyIsAdmin,
} = require("../middelwar/protectedRoute");

const {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controller/products");

router.get("/getProducts", protectedRoute, getProducts);
router.post(
  "/addProduct",
  protectedRoute,
  verifyIsAdmin,
  uploadimages.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  addProduct
);

router.get("/getProduct/:product_ID", protectedRoute, getProduct);
router.patch(
  "/updateProduct/:product_ID",
  protectedRoute,
  verifyIsAdmin,
  uploadimages.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 10 },
  ]),
  editProduct
);
router.delete(
  "/deleteProduct/:product_ID",
  protectedRoute,
  verifyIsAdmin,
  deleteProduct
);

module.exports = router;
