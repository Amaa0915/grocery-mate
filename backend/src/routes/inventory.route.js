const express = require("express")
const router = express.Router();
const InventoryController = require("../controllers/inventory.controller");

const Inventory = require("../models/inventory");

// GET all inventory items
router.get("/", async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    console.error("Inventory fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch inventory items" });
  }
});

////////////////////////////////////////////////////////////////////

// //test
// router.get("/test", (req, res) => res.send("Customer routes working"));

// router.post("/", (req, res) => {
//     Inventory.create(req.body)
//         .then(() => res.json({ msg: "Customer added successfully" }))
//         .catch(() => res.status(400).json({ msg: "Custommer adding failed" }));
// });

// router.get("/", (req, res) => {

//     Inventory.find()
//         .then((inventory) => res.json(inventory))
//         .catch(() => rex.status(400).json({ msg: "No employee" }));
// });

// router.get("/:id", (req, res) => {
//     Inventory.findById(req.params.id)
//         .then((inventory) => res.json(inventory))
//         .catch(() => res.status(400).json({ msg: "cannot find this customer" }))
// });

// router.put("/:id", (req, res) => {
//     Inventory.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => res.json({ msg: "Update successfully" }))
//         .catch(() => res.status(400).json({ msg: "Update fail" }))
//         ;
// });

// router.delete("/:id", (req, res) => {
//     Inventory.findByIdAndDelete(req.params.id).then(() =>
//         res
//             .json({ msg: "Delete successfully" }))
//             .catch(() => res.status(400).json({ msg: "Delete fail" }));
// });

/////////////////////////////////////////////////////////

router.get("/", InventoryController.getAllInventory);
router.post("/", InventoryController.addInventory);
router.get("/:id", InventoryController.getById);
router.put("/:id", InventoryController.updateInventory);
router.delete("/:id", InventoryController.deleteInventory);


module.exports = router;

