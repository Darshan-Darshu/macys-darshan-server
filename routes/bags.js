const express = require("express");
const {
  createOrUpdateBag,
  getBag,
  updateBagQty,
} = require("../controller/bagController");

const router = express.Router();

router.get("/:user", getBag);
router.put("/", createOrUpdateBag);
router.patch("/:user", updateBagQty);

module.exports = router;
