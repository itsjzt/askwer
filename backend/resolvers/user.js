module.exports = function user(authPayload, req, res) {
  console.log('authPayload')
  console.log(authPayload)
  res.json(authPayload)
}