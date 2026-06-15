const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");

const router = require("express").Router();

// auth routes
router.post("/signup", Signup);
router.post("/login", Login);

// ✅ FIXED: proper verify route
router.get("/verify", userVerification);

// logout
router.post("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
    path: "/",
  });

  return res.json({
    status: true,
    message: "Logged out successfully",
  });
});

module.exports = router;