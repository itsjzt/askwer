const knex = require('../database/knex')

module.exports = async function deleteUser(req, res) {
	try {
		const id = parseInt(req.params.id)
		const [checkUser] = await knex('user').where({ id })
		if (!checkUser) {
			return res.sendStatus(404)
		}

		// knex uses del because delete is a JS valid keyword :(
		const count = await knex('user')
			.where({ id })
			.del()
		return res.sendStatus(204)
	} catch (error) {
		console.log(error)
		return res.sendStatus(500)
	}
}
