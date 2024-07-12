// routes/reviewRoutes.js
const express = require("express");
const {
  addReview,
  editReview,
  deleteReview,
  getReviewsForProduct,
} = require("../controllers/reviewController");
const { isAuthenticated } = require("../middlewares/Authentic");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

router.post("/reviews", isAuthenticated, reviewController.addReview);
router.put("/reviews/:reviewId", isAuthenticated, reviewController.editReview);
router.delete(
  "/reviews/:reviewId",
  isAuthenticated,
  reviewController.deleteReview
);
router.get(
  "/products/:productId/reviews",
  reviewController.getReviewsForProduct
);

module.exports = router;
