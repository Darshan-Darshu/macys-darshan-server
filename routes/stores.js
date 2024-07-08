const express = require("express");
const {
  getStores,
  createStore,
  updateStore,
} = require("../controller/storeController");

const router = express.Router();

router.get("/:name", getStores);
router.post("/", createStore);
router.patch("/:name", updateStore);

module.exports = router;
