// routes.js

const express = require("express");
const upload = require("../middlewares/multer");
const { uploadImage } = require("../controllers/uploadController");

const router = express.Router();

// Define the POST route for uploading images
router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
