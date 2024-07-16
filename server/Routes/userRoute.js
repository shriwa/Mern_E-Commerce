const express = require("express");
const router = express.Router();
const userController = require("../Controller/userContoller");
const fetchUser = require("../Middleware/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/admin-login", userController.adminLogin);
router.post("/admin-signup", userController.adminSignup);
router.post("/addtocart", fetchUser, userController.addToCart);
router.post("/removefromcart", fetchUser, userController.removeFromCart);
router.post("/getcart", fetchUser, userController.getCart);

module.exports = router;
