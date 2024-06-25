const Product = require("../models/product");

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    res.statsu(500).json({ err: err.message });
  }
};

module.exports.getproductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json("product created!!!");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
