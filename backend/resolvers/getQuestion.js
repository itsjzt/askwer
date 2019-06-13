const knex = require('../database/knex')

module.exports = async function getQuestion(req, res) {
	try {
		const id = parseInt(req.params.id)
		const [question] = await knex('question').where({ id })

		if (!question) {
			return res.sendStatus(404)
		}

		return res.json(question)
	} catch (error) {
		console.log(error)
		res.sendStatus(500)
	}
}
