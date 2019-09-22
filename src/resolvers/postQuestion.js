const knex = require('../database/knex')
const submitQuestion = require('../schemas/submitQuestion')
const loggedInUser = require('../lib/loggedInUser')

module.exports = async function user(req, res) {
	try {
		const { id } = loggedInUser(req, res)
		await submitQuestion.validate(req.body)
		const [question] = await knex('question')
			.returning('*')
			.insert({ ...req.body, author: id })

		res.status(201).json({ question })
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}
