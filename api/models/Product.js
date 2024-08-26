const mongoose = require("mongoose");

// Define the variant schema with all necessary fields
const variantSchema = new mongoose.Schema({
  sku: { type: String },
  size: { type: String },
  color: { type: String },
  grams: { type: Number },
  inventoryTracker: { type: String },
  inventoryQty: { type: Number },
});

// Define the product schema
const productSchema = new mongoose.Schema({
  title: { type: String },
  bodyHtml: { type: String },
  vendor: { type: String },
  type: { type: String },
  variants: { type: [variantSchema] },
  price: { type: Number },
  compareAtPrice: { type: Number },
  metafields: {
    collarType: { type: [String] },
    design: { type: [String] },
    fabric: { type: [String] },
    occasion: { type: [String] },
  },
  tags: { type: [String] },
  status: { type: String, enum: ["active", "inactive"] },
  image: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
