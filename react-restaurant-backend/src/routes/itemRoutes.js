const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// /item/add
router.post("/add", itemController.addItem);
// /item/all
router.get("/all", itemController.getAllItems);
// /item/orders
router.get("/orders", itemController.getOrders);
router.get("/:id", itemController.getItem);
router.put("/edit/:id", itemController.editItem);
// item/place-order
router.post("/place-order", itemController.placeOrder);
router.post("/order-complete/:id", itemController.completeOrder);

module.exports = router;
