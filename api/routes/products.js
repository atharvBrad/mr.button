const router = require("express").Router();
const productController = require("../controllers/ProductControllers");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProduct);
router.get("/search/:key", productController.searchProduct);
router.post("/", productController.createProduct);
router.get("/category/:category", productController.getProductsByCategory);

module.exports = router;
