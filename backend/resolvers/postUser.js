const knex = require('../database/knex')
const createUserSchema = require('../../schemas/createUser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = async function user(req, res) {
	try {
		await createUserSchema.validate(req.body)
		// knex always returns an array of table
		const [checkUser] = await knex('user').where('email', req.body.email)
		if (checkUser) {
			return res.sendStatus(409)
		}

		const passwordHash = await bcrypt.hash(req.body.password, 10)

		if (!passwordHash) {
			return res.status(500).end()
		}
		req.body.password = passwordHash

		const [user] = await knex('user')
			.returning('*')
			.insert({ ...req.body })

		// important
		delete user.password

		const token = jwt.sign(user, process.env.JWT_SECRET)
		res.status(201).json({ user, token })
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}
