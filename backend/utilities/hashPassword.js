const bcrypt = require('bcryptjs');

module.exports = async function hashPassword(req, res, next) {
  const passwordHash = await bcrypt.hash(req.body.password, 10)

  if (!passwordHash) {
    return res.status(500).end()
  }
  req.body.password = passwordHash
  next()
}