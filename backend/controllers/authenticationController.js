const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/Authenticate")
const cookieParser = require("cookie-parser")

router.use(cookieParser());

router.get("/myTests", authenticate , async(req,res) => {
    console.log("test page");
    res.send(req.rootUser);
});

module.exports = router;