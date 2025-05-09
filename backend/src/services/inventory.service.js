const Supplier = require("../models/inventory");

exports.createInventory = async (newItem) => {
    try {
        const createdInventory = await Inventory.create(newItem);
        return createdInventory;
    } catch (err) {
        console.error("Error creating supplier:", err);
        return { error: err.message };
    }
};

exports.getAllInventory = async () => {
    try {
        const inventory = await Inventory.find();
        return inventory;
    } catch (err) {
        console.error("Error fetching suppliers:", err);
        return { error: err.message };
    }
};

exports.deletedInventory = async (supplierId) => {
    try {
        const deletedInventory = await Inventory.findByIdAndDelete(itemID);
        if (!deletedInventory) {
            return { error: "Supplier not found" };
        }
        return deletedInventory;
    } catch (err) {
        console.error("Error deleting supplier:", err);
        return { error: err.message };
    }
};
exports.updateInventory = async (itemID, updatedData) => {
    try {
        const updateInventory = await Inventory.findByIdAndUpdate(itemID, updatedData, { new: true });
        if (!updateInventory) {
            return { error: "Supplier not found" };
        }
        return updateInventory;
    } catch (err) {
        console.error("Error updating supplier:", err);
        return { error: err.message };
    }
};
exports.getInventoryById = async (supplierId) => {
    try {
        const inventory = await Inventory.findById(itemID);
        if (!inventory) {
            return { error: "Supplier not found" };
        }
        return inventory;
    } catch (err) {
        console.error("Error fetching supplier by ID:", err);
        return { error: err.message };
    }
};