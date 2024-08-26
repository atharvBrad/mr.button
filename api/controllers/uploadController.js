// uploadController.js

const { cloudinary } = require("../utils/cloudinaryConfig");

// Handle file upload and response
const uploadImage = async (req, res) => {
  try {
    // The image URL is automatically added to req.file when using Multer with Cloudinary
    const imageUrl = req.file.path;

    // Send the image URL as a response
    res.status(200).json({
      success: true,
      message: "Image uploaded successfully!",
      imageUrl: imageUrl,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to upload image",
      error: error.message,
    });
  }
};

module.exports = { uploadImage };
