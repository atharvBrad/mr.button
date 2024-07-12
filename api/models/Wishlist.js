const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
