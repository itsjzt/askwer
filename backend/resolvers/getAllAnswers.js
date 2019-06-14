const knex = require('../database/knex')

module.exports = async function getAllAnswers(req, res) {
	try {
		const answers = await knex('answer')
		return res.json(answers)
	} catch (error) {
		console.log(error)
		res.sendStatus(500)
	}
}
