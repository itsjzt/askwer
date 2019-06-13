const createUserSchema = require('../../schemas/createUser')

module.exports = async function signup(req, res, next) {
  try {
    await createUserSchema.validate(req.body)
    return next()
  }
  catch(e) {
    return res.status(422).json(e)
  }
}