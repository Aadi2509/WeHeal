const express = require("express");
const router = express.Router();
const { User } = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

//settings routes for user controller
router.get("/signup", function (req, res) {
  res.send("user Controller Working");
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({ message: "something is missing" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      res.json({ message: "already Exist" });
    }

    const user = new User({ username, email, password });

    await user.save();
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.json({ error: "fill all the credentials" });
  }
  try {
    let token;
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
     
      res.cookie("myCookie", token ,{
        expires: new Date(Date.now() + 25892000000),
        httpOnly:true
      });
      
      if (isMatch) {
        console.log("Login succesfull");
      } else {
        console.log("Invalid Credientials");
      }
    } else {
      console.log("Invalid Credientials");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
