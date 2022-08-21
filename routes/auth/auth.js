const mongoose = require("mongoose");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const path = require("path");

const { User } = require(path.join(__dirname, "../mongoose/models"));
const uri = process.env.MONGODB_URI;

mongoose.connect(uri);

router.post("/register/user", async (req, res) => {
  const user = req.body;
  var new_user = new User(req.body);
  await new_user.save(function (error, result) {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});
router.post("/login/user", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    if (user.password === req.body.password) {
      const token = jwt.sign({ _id: user._id }, "random_string");
      res.json({ status: 200, token: token, user: user });
    } else {
      res.json({ status: 401, message: "passwords doesnot match" });
    }
  } else {
    res.json({ status: 404, message: "username not found" });
  }
});
module.exports = router;
