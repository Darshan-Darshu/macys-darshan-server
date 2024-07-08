const Store = require("../models/store");

module.exports.getStores = async (req, res) => {
  const name = req.params.name;
  try {
    const store = await Store.findOne({ name });

    res.status(200).json(store?.stores);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.createStore = async (req, res) => {
  const name = req.body.name;
  const stores = req.body.stores;
  console.log(req.body);
  try {
    const store = new Store({ name, stores });

    await store.save();
    res.status(201).json("Created!!");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.updateStore = async (req, res) => {
  const name = req.params.name;
  try {
    const store = await Store.findOne({ name });

    store.stores.push(req.body);

    await store.save();

    res.status(200).json("updated");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
