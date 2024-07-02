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
    //   isFeatured: {
    //     type: Boolean,
    //     default: false,
    //   },
    ratings: {
      type: Number,
      default: 0,
    },
    //   reviews: [
    //     {
    //       user: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "User",
    //       },
    //       review: {
    //         type: String,
    //         required: true,
    //       },
    //       rating: {
    //         type: Number,
    //         required: true,
    //       },
    //       createdAt: {
    //         type: Date,
    //         default: Date.now,
    //       },
    //     },
    //   ],
  },
  { timestamps: true }
);

productSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
