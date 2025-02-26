const express = require("express");
const argon2 = require("argon2");
const User = require("../models/User");
const router = express.Router();
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await argon2.hash(password);

    const newUser = new User({ username, password: hashedPassword });
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

    res.status(200).json(`${username} signed in successfully`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
