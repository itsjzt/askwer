const express = require('express')
const logger = require('morgan')
const routes = require('./routes')
const app = express()

/*
  this is a logger thats logs in apache style with "common"
*/
app.use(logger('dev'))
/*
  parse the form data, this only takes URLEncoded form data
*/
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/*
  Create routes from js object.
  this routing doesn't support route based middleware
  routes based middlewares are not very good
  because they don't have a true way to share data
  other than that every route has its own file so,
  why don't make a lib function
  and use in all resolvers
*/
for (let route of routes) {
  app[route.method](route.path, route.resolver)
}
/*
  This also includes a 404 for not found route
*/
app.use('*', (req, res) => res.status(404).end())

/*
  In case of production,
  use the PORT provided by enviornment variables
*/
const port = parseInt(process.env.PORT) || 3000
app.listen(port)
