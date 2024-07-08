const mongoose = require("mongoose");

const bagSchema = mongoose.Schema({
  user: {
    type: String,
    lowercase: true,
  },
  bagId: {
    type: String,
  },
  bagGuid: {
    type: String,
  },
  bag: [
    {
      productName: String,
      price: Number,
      qty: Number,
      imageUrl: String,
      isUpsStore: Boolean,
      isStore: Boolean,
    },
  ],
});

const Bag = mongoose.model("Bag", bagSchema);

module.exports = Bag;
