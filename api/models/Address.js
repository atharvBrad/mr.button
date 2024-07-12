const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullName: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: String, required: true },
    city: { type: String, required: true },
    currentLocation: { type: String, required: true },
    houseBuildingName: { type: String, required: true },
    areaName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    addressType: {
      type: String,
      required: true,
      enum: ["Home", "Office", "Others"],
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
