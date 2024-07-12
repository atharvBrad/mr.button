const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    images: {
      type: [String], // Array of image URLs
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

productSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema(
//   {
//     handle: { type: String, required: true },
//     title: { type: String, required: true },
//     bodyHtml: { type: String, required: true },
//     vendor: { type: String, required: true },
//     productCategory: { type: String, required: true },
//     type: { type: String, required: true },
//     tags: { type: [String], required: true },
//     published: { type: Boolean, required: true },
//     options: [
//       {
//         name: { type: String },
//         value: { type: String },
//       },
//     ],
//     variant: {
//       sku: { type: String },
//       grams: { type: Number },
//       inventoryTracker: { type: String },
//       inventoryQty: { type: Number },
//       inventoryPolicy: { type: String },
//       fulfillmentService: { type: String },
//       price: { type: Number },
//       compareAtPrice: { type: Number },
//       requiresShipping: { type: Boolean },
//       taxable: { type: Boolean },
//       barcode: { type: String },
//     },
//     images: [
//       {
//         src: { type: String },
//         position: { type: Number },
//         altText: { type: String },
//       },
//     ],
//     giftCard: { type: Boolean, required: true },
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now },
//   },
//   { timestamps: true }
// );

// productSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// const Product = mongoose.model("Product", productSchema);

// module.exports = Product;
