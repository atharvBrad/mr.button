const Product = require("../models/Product");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("Product created successfully");
    } catch (error) {
      res.status(500).json("Failed to create product");
    }
  },

  saveProduct: async (req, res) => {
    const {
      _id, // Optional: Used to determine if the product is being updated
      title,
      bodyHtml,
      vendor,
      type,
      variants,
      price,
      compareAtPrice,
      metafields,
      tags,
      status,
      image,
    } = req.body;

    // Validate the incoming request body
    if (!title || !vendor || !price || !status) {
      return res.status(400).json("Missing required fields");
    }

    try {
      let savedProduct;

      if (_id) {
        // Update existing product
        savedProduct = await Product.findByIdAndUpdate(
          _id,
          {
            title,
            bodyHtml,
            vendor,
            type,
            variants,
            price,
            compareAtPrice,
            metafields,
            tags,
            status,
            image,
          },
          { new: true } // Return the updated document
        );

        if (!savedProduct) {
          return res.status(404).json("Product not found");
        }
      } else {
        // Create a new product
        const newProduct = new Product({
          title,
          bodyHtml,
          vendor,
          type,
          variants,
          price,
          compareAtPrice,
          metafields,
          tags,
          status,
          image,
        });

        savedProduct = await newProduct.save();
      }

      res.status(200).json({
        message: _id
          ? "Product updated successfully"
          : "Product added successfully",
        product: savedProduct,
      });
    } catch (error) {
      console.error("Error saving product:", error); // Log the error for debugging
      res.status(500).json({
        message: "Failed to save product",
        error: error.message,
      });
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json("Failed to get the products");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json("Product not found");
      }
    } catch (error) {
      res.status(500).json("Failed to get the product");
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
      res.status(500).json("Failed to search the product");
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
      res.status(500).json("Failed to get the products");
    }
  },

  getProductsByType: async (req, res) => {
    const { type } = req.params;
    console.log("Type parameter received:", type); // Log the type
    try {
      const products = await Product.find({ type });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products by type" });
    }
  },
};
