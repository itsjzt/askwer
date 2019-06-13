const database = require("../database")

module.exports = async function uniqueEmail(req, res, next) {
  const user = await database('user')
    .where('email', req.body.email)
  // knex always returns an array of table
  if (user.length) {
    return res.status(409).json({error: { message: "email already exists" }})
  }
  return next()
}