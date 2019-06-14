const knex = require('../database/knex')

module.exports = async function getAllUser(req, res) {
	try {
		const users = await knex('user')
		// important
		for (user of users) {
			delete user.password
		}

		return res.json(users)
	} catch (error) {
		console.log(error)
		res.sendStatus(500)
	}
}
