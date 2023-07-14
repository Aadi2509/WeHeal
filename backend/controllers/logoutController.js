const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/Authenticate")
const cookieParser = require("cookie-parser")

router.use(cookieParser());

router.get("/logout", async(req,res) => {
    console.log("Logout page");
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send(req.rootUser);
});

module.exports = router;