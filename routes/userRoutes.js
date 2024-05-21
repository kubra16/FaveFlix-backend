const express = require("express");
const { registerUser, authUser } = require("../Controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect);
router.post("/login", authUser);

module.exports = router;
