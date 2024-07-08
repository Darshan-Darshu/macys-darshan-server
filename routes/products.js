const express = require("express");
const {
  getProducts,
  getproductById,
  createProduct,
  getSearchProducts,
} = require("../controller/productController");

const router = express.Router();

router.get("/", getProducts);
router.get("/search", getSearchProducts);
router.get("/:id", getproductById);
router.post("/", createProduct);

module.exports = router;
