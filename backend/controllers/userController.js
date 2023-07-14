const express = require("express");
const router = express.Router();
const { User } = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser")

router.use(cookieParser());

//settings routes for user controller

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "something is missing" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "already Exist" });
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
    return res.status(400).json({ error: "fill all the credentials" });
  }
  try {
    let token;
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
     
      console.log("reached here");
      res.cookie("jwtoken", token ,{
        expires: new Date(Date.now() + 25892000000),
        httpOnly:true
      });
      
      if (isMatch) {
        console.log("Login succesfull");
        return res.json({message:"success"});
      } else {
        console.log("Invalid Credientials");
        return res.status(400).json({message:"Invalid Credientials"});
      }
    } else {
      return res.status(401).json({message:"Invalid Credientials"});
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
