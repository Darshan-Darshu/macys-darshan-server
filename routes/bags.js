const express = require("express");
const {
  createOrUpdateBag,
  getBag,
  updateBagQty,
  deleteBagItem,
  getBagById,
} = require("../controller/bagController");

const router = express.Router();

router.get("/:user", getBag);
router.get("/search/:bagId", getBagById);
router.put("/", createOrUpdateBag);
router.patch("/:user", updateBagQty);
router.patch("/delete/:bagId", deleteBagItem);

module.exports = router;
