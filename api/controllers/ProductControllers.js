const Product = require("../models/Product");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("product created successfully");
    } catch (error) {
      res.status(500).json("failed to create successfully");
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json("failed to get the products");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json("failed to get the products");
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "mr-button",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("failed to search the product");
    }
  },

  getProductsByCategory: async (req, res) => {
    const category = req.params.category;
    console.log("Requested category:", category); // Log the requested category
    try {
      const products = await Product.find({ category });
      console.log("Fetched products:", products); // Log fetched products
      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error); // Log the error
      res.status(500).json("failed to get the products");
    }
  },
};
