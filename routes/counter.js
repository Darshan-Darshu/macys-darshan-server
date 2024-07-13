const express = require("express");
const {
  getCounter,
  createCounter,
  updateCounter,
  resetCounter,
} = require("../controller/counterController");

const router = express.Router();

router.get("/", getCounter);
router.post("/", createCounter);
router.patch("/:id", updateCounter);
router.patch("/reset/:id", resetCounter);

module.exports = router;
