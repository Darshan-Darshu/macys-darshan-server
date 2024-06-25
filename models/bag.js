const mongoose = require("mongoose");

const bagSchema = mongoose.Schema({
  user: {
    type: String,
    require: true,
    lowercase: true,
  },
  bag: [
    {
      productName: String,
      price: Number,
      qty: Number,
      imageUrl: String,
    },
  ],
});

const Bag = mongoose.model("Bag", bagSchema);

module.exports = Bag;
