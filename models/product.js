const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  productType: {
    type: String,
    require: true,
  },
  productImage: {
    type: String,
    require: true,
  },
  isUpsAp: Boolean,
  isStore: Boolean,
  webId: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
