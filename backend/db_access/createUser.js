const database = require('../database')

module.exports = async function createUser(req, res, next) {
  try {
    const [user] = await database('user')
      .returning('*')
      .insert({...req.body})
    res.json(user)
  }
  catch (e) {
    res.status(500).json(e)
  }
}