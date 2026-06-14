require("dotenv").config();

console.log("TOKEN_KEY =", process.env.TOKEN_KEY);

const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};