const express = require("express");
const {
  createOrUpdateBag,
  getBag,
} = require("../controller/bagController");

const router = express.Router();

router.get("/:user", getBag);
router.put("/", createOrUpdateBag);

module.exports = router;
