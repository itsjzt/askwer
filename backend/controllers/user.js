const database = require('../database')

exports.create = async function(req, res) {
  const user = await database('user')
  .returning('*')
  .insert({...req.body})
  res.json(user)
}