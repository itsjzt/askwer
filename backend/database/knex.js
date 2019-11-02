// configure Knex
const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]

module.exports = knex(configuration)
