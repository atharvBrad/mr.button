const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController");

router.post("/add", wishlistController.addToWishlist);
router.post("/remove", wishlistController.removeFromWishlist);
router.get("/:userId", wishlistController.getWishlist);

module.exports = router;
