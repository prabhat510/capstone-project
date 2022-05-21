const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("unauthorized request");
  } else {
    try {
      const payload = jwt.verify(token, "random_string");
      if (!payload) {
        return res.status(401).send("unauthorized request");
      }
    } catch (error) {
      return res.status(401).send("unauthorized request");
    }
    next();
  }
}
module.exports = verifyToken;
