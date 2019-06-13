const knex = require('../database/knex')

module.exports = async function getUser(req, res) {
	try {
		const id = parseInt(req.params.id)
		const [user] = await knex('user').where({ id })

		if (!user) {
			return res.sendSatus(404)
		}

		// important
		delete user.password
		return res.json(user)
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
}
