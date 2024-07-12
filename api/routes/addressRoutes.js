const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");
const { isAuthenticated } = require("../middlewares/Authentic");

// Add a new address
router.post("/address", isAuthenticated, addressController.addAddress);

// Get all addresses for a user
router.get("/address", isAuthenticated, addressController.getAddresses);

// Update an address
router.put("/address/:id", isAuthenticated, addressController.updateAddress);

// Delete an address
router.delete("/address/:id", isAuthenticated, addressController.deleteAddress);

module.exports = router;
