// Update with your config settings.

module.exports = {

  development: {
    client: "pg", // pg is the database library for postgreSQL on knexjs
    connection: {
      host: "127.0.0.1", // Your local host IP
      user: "postgres", // Your postges user name
      password: "root", // Your postgres user password
      database: "postgres" // Your database name
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
