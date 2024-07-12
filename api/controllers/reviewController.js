// controllers/reviewController.js
const Review = require("../models/Review");
const Product = require("../models/Product");

// Add a review
module.exports = {
  addReview: async (req, res) => {
    try {
      const { productId, rating, comment } = req.body;

      console.log("Received body:", req.body);

      console.log("Received productId:", productId);

      console.log("Received rating:", req.body.rating);
      console.log("Received comment:", req.body.comment);

      if (!productId || !rating || !comment) {
        return res
          .status(400)
          .json({ error: "productId, rating, and comment are required" });
      }

      const review = new Review({
        user: req.user._id,
        product: productId,
        rating,
        comment,
      });

      await review.save();

      console.log("new review created : ", review);

      res.status(201).json(review);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Edit a review
  editReview: async (req, res) => {
    try {
      const { reviewId } = req.params;
      const { rating, comment } = req.body;

      const review = await Review.findById(reviewId);
      if (!review) {
        return res.status(404).json({ error: "Review not found" });
      }

      if (review.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ error: "Unauthorized" });
      }

      review.rating = rating;
      review.comment = comment;

      await review.save();

      res.status(200).json(review);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a review
  deleteReview: async (req, res) => {
    try {
      const { reviewId } = req.params;

      const review = await Review.findById(reviewId);
      if (!review) {
        return res.status(404).json({ error: "Review not found" });
      }

      if (review.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ error: "Unauthorized" });
      }

      await review.remove();

      res.status(200).json({ message: "Review deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get reviews for a product
  getReviewsForProduct: async (req, res) => {
    try {
      const { productId } = req.params;
      const reviews = await Review.find({ product: productId }).populate(
        "user",
        "firstName lastName"
      );
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
