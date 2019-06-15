const knex = require('../database/knex')

module.exports = async function getAllQuestions(req, res) {
	try {
		let questions
		if (req.query.author) {
			// later, when where selectors are increased you can make
			// an optional object creator
			const author = req.query.author
			questions = await knex('question').where({ author })
		} else {
			questions = await knex('question')
		}
		return res.json(questions)
	} catch (error) {
		console.log(error)
		res.sendStatus(500)
	}
}
