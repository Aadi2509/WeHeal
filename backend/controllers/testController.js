const express = require("express");
const router = express.Router();
const { User } = require("../model/userSchema");
const { Test } = require("../model/testSchema");

//settings routes for test controller
router.get("/:userId/yourTests", async (req, res) => {
  const userId = req.params.userId;
  const foundUser = await User.findOne({ _id: userId }).populate(
    "testsForThisUser"
  );
  return res.json(foundUser);
});

router.post("/:userId/bookTest", async (req, res) => {
  const { name, age, gender, phoneNumber, address, date, service, tests } =
    req.body;
  const userId = req.params.userId;
  const status = "pending";
  if (
    !name ||
    !age ||
    !gender ||
    !phoneNumber ||
    !address ||
    !date ||
    !service ||
    !tests
  ) {
    return res.json({ message: "Please enter all the required Information" });
  }

  try {
    const testDetailsAlreadyTaken = await Test.findOne({
      name: name,
      age: age,
      gender: gender,
      phoneNumber: phoneNumber,
      address: address,
      date: date,
      service: service,
      tests: tests,
    });
    if (testDetailsAlreadyTaken) {
      return res.json({ message: "test details already registered" });
    }

    

    const test = new Test({
      name,
      age,
      gender,
      phoneNumber,
      address,
      date,
      service,
      status,
      tests,
    });

    const newTest = await test.save();

    const foundUser = await User.findOne({ _id: userId });
    if (foundUser) {
      foundUser.testsForThisUser.push(newTest._id);
      await foundUser.save();
      return res.json({ message: "xyz" });
    }
  } catch (err) {
    console.log(err);
  }

  res.json({ message: "error" });
});

module.exports = router;
