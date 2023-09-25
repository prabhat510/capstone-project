const bcrypt = require("bcrypt");
const sanitize = require('mongo-sanitize');
const router = require("express").Router();
const { User } = require("../mongoose/models");

router.post("/register/user", async (req, res) => {
  const userPayload = req.body;
  userPayload['username'] = sanitize(req.body.username);
  try {
    const user_exists = await User.findOne({ username: userPayload.username });
    if (user_exists) {
      res.json({ status: 409, message: "username already exists" });
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(userPayload.password, salt);
      userPayload["password"] = hashedPassword;
      const newUser = new User(userPayload);
      await newUser.save(function (error, result) {
        if (error) {
          console.log(error);
          res.json(error);
        } else {
          console.log(result);
          res.json(result);
        }
      });
    }
  } catch (error) {
    res.status(500).send();
  }
});
module.exports = router;
