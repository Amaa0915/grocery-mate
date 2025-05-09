const Inventory = require("../models/inventory");

/*const getAllInventory= async (req, res, next) =>{
    let inventory;

    try{
        inventory = await Inventory.find();
    }catch (err){
        console.log(err);
    }
    //not found
    if(!inventory){
        return res.status(404).json({message:"Inventory not found"})
    };
    //display all users
    return res.status(200).json({inventory});
};*/

const getAllInventory = async (req, res) => {
    try {
        const inventory = await inventory.service.getAllInventory();
        if (!inventory || inventory.length === 0) {
            return res.status(404).json({ message: "No Items are found" });
        }
        return res.status(200).json({ suppliers });
    } catch (err) {
        console.error("Error fetching inventories:", err);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

//inserting data
const addInventory = async (req, res, next) =>{
  
    const {itemNo, name, description, category, stock} = req.body;

    let inventory;

    try{
        inventory = new Inventory({itemNo, name, description, category, stock});
        await inventory.save();
    }catch (err){
        console.log(err);
    }
    //not insert users
    if(!inventory){
        return res.status(404).json({message:"unable to add inventories"})
    }
    return res.status(200).json({inventory})
}

// Get by ID
const getById =  async (req, res, next) =>{
    const id = req.params.id;

    let inventory;

    try {
        inventory = await Inventory.findById(id);
    }catch (err){
        console.log(err);
    }

    //not available users
    if(!inventory){
        return res.status(404).json({message:"Inventories not found"})
    }
    return res.status(200).json({inventory})
}

//update inventory
/*const updateInventory = async (req,res,next) =>{
    const id = req.params.id;
    const {itemNo, name, description, category, stock} = req.body;

    let inventory;

    try {
        inventory = await Inventory.findByIdAndUpdate(id, {itemNo:itemNo, name:name, description:description,  category:category, stock:stock});
      //  inventory = await URLSearchParams.save();
    }catch(err) {
        console.log(err);
    }
     //not available users
    if(!inventory){
        return res.status(404).json({message:"Unable to update inventory details"})
    }
    return res.status(200).json({inventory})
    
};*/

const updateInventory = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
  
      const updatedInventory = await Inventory.findByIdAndUpdate(id, updatedData, { new: true });
      if (!updatedInventory) {
        return res.status(404).json({ message: "Inventory not found" });
      }
  
      res.status(200).json(updatedInventory);
    } catch (err) {
      console.error("Error updating inventory:", err);
      res.status(500).json({ message: "Server error" });
    }
  };

//delete inventory

const deleteInventory =  async (req, res, next) => {
    const id = req.params.id;

    let inventory;

    try{
        inventory = await Inventory.findByIdAndDelete(id)
    }catch (err){
        console.log(err);
    }

    //not available users
    if(!inventory){
        return res.status(404).json({message:"Unable to delete inventory details"})
    }
    return res.status(200).json({inventory})
}


exports.getAllInventory = getAllInventory;
exports.addInventory = addInventory;
exports.getById = getById;
exports.updateInventory = updateInventory;
exports.deleteInventory = deleteInventory;