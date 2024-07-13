const express = require("express");
const {
  getCounter,
  createCounter,
  updateCounter,
} = require("../controller/counterController");

const router = express.Router();

router.get("/", getCounter);
router.post("/", createCounter);
router.patch("/:id", updateCounter);

module.exports = router;
