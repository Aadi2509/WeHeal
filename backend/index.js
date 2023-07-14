//modules
const dotenv=require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require("cors");
dotenv.config({path: './config.env'})

//Database Connection
require("./db/database")

//require models
const User = require('./model/userSchema');
const Test = require('./model/testSchema');

//initializer    
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))


//Setting Controllers
const userControls= require(__dirname+"/controllers/userController.js");
const testControls= require(__dirname+"/controllers/testController.js");
const authenticationControls = require(__dirname + "/controllers/authenticationController.js");

//using controller and setting routes
app.get("/",function(req,res){
    res.send("working");
})
app.use("/register", userControls);
app.use("/", testControls);
app.use("/", authenticationControls);


//Server Listing at
app.listen(8000, function(){
    console.log(`app is running at port 8000`);
})