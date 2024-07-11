const jwt = require("jsonwebtoken");

const fetchUser = async (req, res, next) => {
  const token = req.header("auth_token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }
  }
};

module.exports = fetchUser;
