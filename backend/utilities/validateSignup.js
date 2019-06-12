const createUserSchema = require('../../reusables/createUserSchema')

module.exports = async function validateSignup(req, res, next) {
  try {
    await createUserSchema.validate(req.body)
    return next()
  }
  catch(e) {
    const { message } = e
    return res.status(422).json({error: { message }})
  }
}