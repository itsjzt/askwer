const jwt = require("jsonwebtoken")
const util = require("util")

module.exports = async function generateJWT(req, res, next) {
  if (!req.user) {
    return res.status(500).end()
  }

  jwt.sign(
    req.user,
    process.env.JWT_SECRET,
    function (error, token) {
    req.payload = { user, token }
    next()
  })
}