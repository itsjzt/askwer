const supertest = require('supertest')
const should = require('should')

// This agent refers to PORT where program is runninng.

const server = supertest.agent('http://localhost:3000')

// UNIT test begin

describe('SAMPLE unit test', function() {
	// #1 should return home page

	it('should return 200', function(done) {
		// calling home page api
		server
			.get('/')
			.expect('Content-type', /json/)
			.expect(200) // This is HTTP response
			.end(function(err, res) {
				// HTTP status should be 200
				res.status.should.equal(200)
				done()
			})
	})

	it('should return all questions', function(done) {
		server
			.get('/users/1')
			.expect('Content-type', /json/)
			.expect(200) // This is HTTP response
			.end(function(err, res) {
				// HTTP status should be 200
				res.status.should.equal(500)
				done()
			})
	})
})
