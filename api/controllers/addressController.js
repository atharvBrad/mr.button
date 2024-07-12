const Address = require("../models/Address");

// Add a new address
exports.addAddress = async (req, res) => {
  try {
    const {
      fullName,
      country,
      pincode,
      city,
      currentLocation,
      houseBuildingName,
      areaName,
      mobileNumber,
      addressType,
    } = req.body;

    const newAddress = new Address({
      userId: req.user._id,
      fullName,
      country,
      pincode,
      city,
      currentLocation,
      houseBuildingName,
      areaName,
      mobileNumber,
      addressType,
    });

    await newAddress.save();

    res
      .status(201)
      .json({ message: "Address added successfully", address: newAddress });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add address", message: error.message });
  }
};

// Get all addresses for a user
exports.getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.user._id });
    res.status(200).json(addresses);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get addresses", message: error.message });
  }
};

// Update an address
exports.updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fullName,
      country,
      pincode,
      city,
      currentLocation,
      houseBuildingName,
      areaName,
      mobileNumber,
      addressType,
    } = req.body;

    const updatedAddress = await Address.findByIdAndUpdate(
      id,
      {
        fullName,
        country,
        pincode,
        city,
        currentLocation,
        houseBuildingName,
        areaName,
        mobileNumber,
        addressType,
      },
      { new: true }
    );

    if (!updatedAddress) {
      return res.status(404).json({ error: "Address not found" });
    }

    res
      .status(200)
      .json({
        message: "Address updated successfully",
        address: updatedAddress,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update address", message: error.message });
  }
};

// Delete an address
exports.deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAddress = await Address.findByIdAndDelete(id);
    if (!deletedAddress) {
      return res.status(404).json({ error: "Address not found" });
    }

    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete address", message: error.message });
  }
};
