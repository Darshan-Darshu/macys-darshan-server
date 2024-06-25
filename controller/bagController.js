const Bag = require("../models/bag");

module.exports.getBag = async (req, res) => {
  const user = req.params.user;
  try {
    const bag = await Bag.findOne({ user });

    res.status(200).json(bag);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.createOrUpdateBag = async (req, res) => {
  const user = req.body.user;
  try {
    const userBag = await Bag.findOne({ user });

    const bag = {
      productName: req.body.productName,
      price: req.body.price,
      qty: req.body.qty,
      imageUrl: req.body.imageUrl,
    };

    if (!userBag) {
      const createdBag = new Bag({ user });
      createdBag.bag.push(bag);

      await createdBag.save();
      res.status(200).json("Bag created");
      return;
    }

    const itemExistIndex = userBag.bag.findIndex(
      (item) => item.productName === req.body.productName,
    );

    if (itemExistIndex > -1) {
      const qty = userBag.bag[itemExistIndex].qty;
      userBag.bag[itemExistIndex].qty = qty + 1;
      await userBag.save();

      return;
    }

    userBag.bag.push(bag);
    await userBag.save();
    res.status(200).json("Bag updated");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
