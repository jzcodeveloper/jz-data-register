const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const User = require("../controllers/UserController");

//Get user
router.get("/user", auth, (req, res) => {
  User.getUser(req, res);
});

//Login user
router.post("/login", (req, res) => {
  User.loginUser(req, res);
});

//Register user
router.post("/register", (req, res) => {
  User.registerUser(req, res);
});

module.exports = router;
