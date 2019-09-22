const express = require('express')
const hello = require('./resolvers/hello')
const postUser = require('./resolvers/postUser')
const getUser = require('./resolvers/getUser')
const deleteUser = require('./resolvers/deleteUser')
const postQuestion = require('./resolvers/postQuestion')
const postAnswer = require('./resolvers/postAnswer')
const getQuestion = require('./resolvers/getQuestion')
const getAllQuestions = require('./resolvers/getAllQuestions')
const getAllUsers = require('./resolvers/getAllUsers')
const getAnswer = require('./resolvers/getAnswer')
const getAllAnswers = require('./resolvers/getAllAnswers')

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
		path: '/questions',
		method: 'get',
		resolver: getAllQuestions,
	},
	{
		path: '/questions/:id',
		method: 'get',
		resolver: getQuestion,
	},
	{
		path: '/answers',
		method: 'get',
		resolver: getAllAnswers,
	},
	{
		path: '/answers',
		method: 'post',
		resolver: postAnswer,
	},
	{
		path: '/answers/:id',
		method: 'get',
		resolver: getAnswer,
	},
	{
		path: '/users',
		method: 'get',
		resolver: getAllUsers,
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
