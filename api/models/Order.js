const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      //   required: true,
    },
    quantity: {
      type: Number,
      required: true,
      //   min: 1,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    delivery_status: {
      type: String,
      //   enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
      //   required: true,
    },
    payment_status: {
      type: String,
      //   enum: ["Pending", "Paid", "Failed"],
      //   default: "Pending",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
