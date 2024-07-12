const Product = require("../models/Product");
const Cart = require("../models/Cart");

module.exports = {
  addTocart: async (req, res) => {
    const { userId, cartItem, quantity } = req.body;

    try {
      console.log("Received userId:", userId);
      console.log("Received cartItem:", cartItem);
      console.log("Received quantity:", quantity);

      const cart = await Cart.findOne({ userId });

      if (cart) {
        const existingProduct = cart.products.find(
          (product) => product.cartItem.toString() === cartItem
        );

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.products.push({ cartItem, quantity });
        }

        await cart.save();
        res.status(200).json("product added to the cart");
      } else {
        const newCart = new Cart({
          userId,
          products: [
            {
              cartItem,
              quantity: quantity,
            },
          ],
        });

        await newCart.save();
        res.status(200).json("product added to the cart");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getcart: async (req, res) => {
    const userId = req.params.id;

    try {
      const cart = await Cart.find({ userId }).populate(
        "products.cartItem",
        "_id name price discountedPrice images"
      );

      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteCartItem: async (req, res) => {
    const cartItemId = req.params.cartItemId;

    try {
      const updatedCart = await Cart.findOneAndUpdate(
        { "products._id": cartItemId },
        { $pull: { products: { _id: cartItemId } } },
        { new: true }
      );

      if (!updatedCart) {
        return res.status(404).json("Cart item not found");
      }

      res.status(200).json(updatedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  decrementCartItem: async (req, res) => {
    const { userId, cartItem } = req.body;

    try {
      const cart = await Cart.findOne({ userId });

      if (!cart) {
        return res.status(404).json("Cart not found");
      }

      const existingProduct = cart.products.find(
        (product) => product.cartItem.toString() === cartItem
      );

      if (!existingProduct) {
        return res.status(404).json("Product not found");
      }

      if (existingProduct.quantity === 1) {
        cart.products = cart.products.filter(
          (product) => product.cartItem.toString() !== cartItem
        );
      } else {
        existingProduct.quantity -= 1;
      }

      await cart.save();

      if (existingProduct.quantity === 0) {
        await Cart.updateOne({ userId }, { $pull: { products: { cartItem } } });
      }

      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  incrementCartItem: async (req, res) => {
    const { userId, cartItem } = req.body;

    try {
      const cart = await Cart.findOne({ userId });

      if (!cart) {
        return res.status(404).json("Cart not found");
      }

      const existingProduct = cart.products.find(
        (product) => product.cartItem.toString() === cartItem
      );

      if (!existingProduct) {
        return res.status(404).json("Product not found");
      }

      existingProduct.quantity += 1;

      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // decrementCartItem: async (req, res) => {
  //   const { userId, cartItem } = req.body;

  //   try {
  //     const cart = await Cart.findOne({ userId });

  //     if (!cart) {
  //       return res.status(404).json("Cart not found");
  //     }

  //     const existingProduct = cart.products.find(
  //       (product) => product.cartItem.toString() === cartItem
  //     );

  //     if (!existingProduct) {
  //       return res.status(404).json("Product not found");
  //     }

  //     if (existingProduct.quantity > 1) {
  //       existingProduct.quantity -= 1;
  //       await cart.save();
  //       res.status(200).json(cart);
  //     } else {
  //       return res.status(400).json("Quantity cannot be less than 1");
  //     }
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // },
};
