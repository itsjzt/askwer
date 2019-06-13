const express = require('express')
const index = require('./resolvers/index')
const postUser = require('./resolvers/postUser')

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
]
