const express = require("express");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const User = require("../models/User");
const router = express.Router();
router.post("/register", async (req, res) => {
  try {
    const { username, password, role = "user" } = req.body;
    const hashedPassword = await argon2.hash(password);

    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();
    res
      .status(201)
      .json({ message: `User: ${username} Registered Successfully!` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json(`User: ${username} not found`);
    const isPasswordMatch = argon2.verify(user.password, password);
    if (!isPasswordMatch) return res.status(400).json("Invalid Credentials");

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET, // Store the secret in the .env file
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({ message: `${username} signed in successfully`, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
