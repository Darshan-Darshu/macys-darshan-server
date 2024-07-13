const Counter = require("../models/counter");

module.exports.getCounter = async (req, res) => {
  try {
    const counter = await Counter.find();

    res.status(200).json(counter);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.createCounter = async (req, res) => {
  try {
    const counter = new Counter({ count: req.body.count });

    await counter.save();
    res.status(201).json("Create!!");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports.updateCounter = async (req, res) => {
  const { id } = req.params;

  try {
    const counter = await Counter.findById(id);

    counter.count += req.body.count;
    await counter.save();

    res.status(200).json("updated!!!");
  } catch (err) {
    res.status.json({ err: err.message });
  }
};

module.exports.resetCounter = async (req, res) => {
  const { id } = req.params;

  try {
    const counter = await Counter.findById(id);

    counter.count = 0;
    await counter.save();

    res.status(200).json("reset!!!");
  } catch (err) {
    res.status.json({ err: err.message });
  }
};
