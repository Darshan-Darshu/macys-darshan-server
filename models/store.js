const mongoose = require("mongoose");

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    lowercase: true,
  },
  stores: [
    {
      name: String,
      distance: String,
      time: String,
    },
  ],
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
