const knex = require('../database/knex')

module.exports = async function getAnswer(req, res) {
	try {
		const id = parseInt(req.params.id)
		const [answer] = await knex('answer').where({ id })

		if (!answer) {
			return res.sendStatus(404)
		}

		return res.json(answer)
	} catch (error) {
		console.log(error)
		res.sendStatus(500)
	}
}
