const express = require('express')
const index = require('./resolvers/index')
const postUser = require('./resolvers/postUser')
const getUser = require('./resolvers/getUser')
const deleteUser = require('./resolvers/deleteUser')

module.exports = [
	{
		path: '/hello',
		method: 'get',
		resolver: index,
	},
	{
		path: '/users/:id',
		method: 'get',
		resolver: getUser,
	},
	{
		path: '/users',
		method: 'post',
		resolver: postUser,
	},
	{
		path: '/users/:id',
		method: 'delete',
		resolver: deleteUser,
	},
]
