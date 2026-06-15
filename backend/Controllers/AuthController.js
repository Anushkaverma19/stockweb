const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// =====================
// SIGNUP
// =====================
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        message: "User already exists",
        success: false,
      });
    }

    const user = await User.create({
      email,
      password,
      username,
      createdAt,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
      token, // ✅ Added
    });

    next();
  } catch (error) {
    console.error(error);
  }
};

// =====================
// LOGIN
// =====================
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      token, // ✅ Added
      user,  // ✅ Added
    });

    next();
  } catch (error) {
    console.error(error);
  }
};