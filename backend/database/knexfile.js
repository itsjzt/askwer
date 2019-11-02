module.exports = {
	development: {
		client: 'pg', // pg is the database library for postgreSQL on knexjs
		connection: {
			host: '127.0.0.1',
			user: 'postgres',
			password: 'root',
			database: 'db_name',
		},
	},
	production: {
		client: 'pg',
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_DATABASE,
		},
	},
}
