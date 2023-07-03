const express = require("express");
const router = express.Router();
const { User } = require("../model/userSchema");

//settings routes for user controller
router.get("/", function (req, res) {
  res.send("user Controller Working");
});

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({ message: "something is missing" });
  }

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    res.json({ message: "already Exist" });
  }

  const user = new User({ username, email, password });

  await user.save();
});

module.exports = router;
