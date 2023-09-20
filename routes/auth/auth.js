const bcrypt = require("bcrypt");
const router = require("express").Router();
const { User } = require("../mongoose/models");

router.post("/register/user", async (req, res) => {
  try {
    const user_exists = await User.findOne({ username: req.body.username });
    if (user_exists) {
      res.json({ status: 409, message: "username already exists" });
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const userData = req.body;
      userData["password"] = hashedPassword;
      const newUser = new User(userData);
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
