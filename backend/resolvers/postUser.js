const knex = require("../database/knex")
const createUserSchema = require('../../schemas/createUser')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = async function user(req, res) {
  try {
    await createUserSchema.validate(req.body)

    const [checkUser] = await knex('user')
      .where('email', req.body.email)
    // knex always returns an array of table
    if (checkUser) {
      return res.status(409).json({
        error: {
          message: "email already exists"
        }
      })
    }

    const passwordHash = await bcrypt.hash(req.body.password, 10)

    if (!passwordHash) {
      return res.status(500).end()
    }
    req.body.password = passwordHash

    const [user] = await knex('user')
      .returning('*')
      .insert({ ...req.body })

    const token = jwt.sign(user, process.env.JWT_SECRET)
    res.json({ user, token })
  }
  catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}