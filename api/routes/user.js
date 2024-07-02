const router = require("express").Router();
const userController = require("../controllers/userController");

router.delete("/:id", userController.deleteUser);
router.delete("/", userController.deleteAllUsers);
// router.get("/:id", userController.getUser);

module.exports = router;
