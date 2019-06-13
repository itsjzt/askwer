const express = require('express')
const index = require('./resolvers/index')
const postUser = require('./resolvers/postUser')
const getUser = require('./resolvers/getUser')

module.exports = [
	{
		path: '/hello',
		method: 'get',
		resolver: index,
	},
	{
		path: '/user',
		method: 'post',
		resolver: postUser,
	},
	{
		path: '/user/:id',
		method: 'get',
		resolver: getUser,
	},
]
