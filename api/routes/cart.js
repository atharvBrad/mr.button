const router = require("express").Router();
const cartController = require("../controllers/cartController");

router.get("/find/:id", cartController.getcart);
router.post("/", cartController.addTocart);
// router.post("/quantity", cartController.decrementCartItem);
router.put("/increment", cartController.incrementCartItem); // Add increment route
router.put("/decrement", cartController.decrementCartItem);
router.delete("/:cartItemId", cartController.deleteCartItem);

module.exports = router;
