const knex = require('../database/knex')
const submitAnswer = require('../../schemas/submitAnswer')
const loggedInUser = require('../lib/loggedInUser')

module.exports = async function user(req, res) {
	try {
		const { id } = loggedInUser(req, res)
		await submitAnswer.validate(req.body)
		const [question] = await knex('question').where({ id: req.body.question })

		if (!question) {
			return res.sendStatus(400)
		}

		const [answer] = await knex('answer')
			.returning('*')
			.insert({ ...req.body, author: id })

		res.status(201).json({ answer })
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}
