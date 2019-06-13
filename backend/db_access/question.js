const database = require("../database")

exports.create = async function(req, res) {
  const { text } = req.body

  const question = await database('question')
  .insert({text, author: '1' })

  if (!question) {
    res.status(404)
  }
  res.json(question)
}