const knex = require('../database/knex')

module.exports = async function getAllQuestions(req, res) {
	try {
		const questions = await knex('question')
		return res.json(questions)
	} catch (error) {
		console.log(error)
		res.sendStatus(500)
	}
}
