const knex = require('../database/knex')

module.exports = async function getAllAnswers(req, res) {
	try {
		let answers

		if (req.query.query) {
			const question = req.query.question
			answers = await knex('answer').where({ question })
		} else {
			answers = await knex('answer')
		}

		return res.json(answers)
	} catch (error) {
		console.log(error)
		res.sendStatus(500)
	}
}
