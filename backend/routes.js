const express = require('express')
const hello = require('./resolvers/hello')
const postUser = require('./resolvers/postUser')
const getUser = require('./resolvers/getUser')
const deleteUser = require('./resolvers/deleteUser')
const postQuestion = require('./resolvers/postQuestion')
const getQuestion = require('./resolvers/getQuestion')

module.exports = [
	{
		path: '/',
		method: 'get',
		resolver: hello,
	},
	{
		path: '/questions',
		method: 'post',
		resolver: postQuestion,
	},
	{
		path: '/questions/:id',
		method: 'get',
		resolver: getQuestion,
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
