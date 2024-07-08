const Product = require("../models/product");

module.exports.getSearchProducts = async (req, res) => {
  const search = req.query.search;
  try {
    const product = await Product.find({
      $or: [
        { webId: search },
        { productType: search },
        { productName: search },
      ],
    });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ err: err.message });
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
  const webId = Math.random() * 1000000;
  const payloadBody = {
    ...req.body,
    webId,
    isStore: true,
    isUpsAp: true,
  };

  try {
    const product = new Product(payloadBody);
    await product.save();

    res.status(201).json("product created!!!");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
