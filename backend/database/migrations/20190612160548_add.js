exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('user', function(t) {
			t.increments('id')
				.unsigned()
				.primary()
			t.string('name').notNull()
			t.text('description').nullable()
			t.string('email').notNull()
			t.string('password').notNull()
			t.timestamps()
		})
		.createTable('question', function(t) {
			t.increments('id')
				.unsigned()
				.primary()
			t.string('text').notNull()
			t.text('decription').nullable()
			t.integer('author')
				.references('id')
				.inTable('user')
				.notNull()
				.onDelete('cascade')
			t.timestamps()
		})
		.createTable('answer', function(t) {
			t.increments('id')
				.unsigned()
				.primary()
			t.string('text').notNull()
			t.integer('question')
				.references('id')
				.inTable('question')
				.notNull()
				.onDelete('cascade')
			t.integer('author')
				.references('id')
				.inTable('user')
				.notNull()
				.onDelete('cascade')
			t.timestamps()
		})
}

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('question')
		.dropTable('answer')
		.dropTable('user')
}
