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

module.exports.getBagById = async (req, res) => {
  const bagId = req.params.bagId;
  try {
    const bag = await Bag.findOne({ bagId });

    res.status(200).json(bag);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.createOrUpdateBag = async (req, res) => {
  const bagId = req.body.bagId;
  try {
    const userBag = await Bag.findOne({ bagId });

    const bag = {
      productName: req.body.productName,
      price: req.body.price,
      qty: req.body.qty,
      imageUrl: req.body.imageUrl,
    };

    const generateBagId = req.body.bagId;

    const bagGuid = req.body.bagGuid;

    if (!userBag) {
      const createdBag = new Bag({
        user: req.body.user,
        bagId: generateBagId,
        bagGuid,
      });
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
      res.status(200).json("Qty updated");

      return;
    }

    userBag.bag.push(bag);
    await userBag.save();
    res.status(200).json("Bag updated");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.updateBagQty = async (req, res) => {
  const user = req.params.user;
  const { name } = req.body;

  try {
    const bags = await Bag.findOne({ user });

    const bag = bags.bag.find(
      (bag) => bag.productName === name,
    );
    console.log(bag.qty);

    bag.qty += Number(req.body.amount);
    console.log(bag.qty);
    await bags.save();
    res.status(200).json("updated Successfully");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.deleteBagItem = async (req, res) => {
  const bagId = req.params.bagId;
  const { name } = req.body;

  try {
    const bags = await Bag.findOne({ bagId });

    if (!bags) {
      res.status(400).json({ err: "Wrong BagID" });
    }

    const bagItems = bags.bag.filter((bag) => {
      return bag.productName !== name;
    });

    bags.bag = bagItems;

    await bags.save();
    res.status(200).json("delete item!!");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
