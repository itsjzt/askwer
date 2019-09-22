const jwt = require('jsonwebtoken')

module.exports = function loggedInUser(req, res) {
	if (!req.headers && !req.headers.authorization) {
		return res.sendStatus(401)
	}

	const token = req.headers.authorization.replace('Bearer ', '')

	const user = jwt.verify(token, process.env.JWT_SECRET)
	if (!user) {
		return res.sendStatus(401)
	}
	return user
}
