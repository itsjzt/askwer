exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('user', function(t) {
			t.increments('id')
				.unsigned()
				.primary()
			t.string('name').notNull()
			t.string('email').notNull()
			t.string('password').notNull()
			t.timestamps()
		})
		.createTable('question', function(t) {
			t.increments('id')
				.unsigned()
				.primary()
			t.text('text').notNull()
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
			t.text('text').notNull()
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
	// this drop table needs some exactness
	// you can't delete question
	// before answer because of foreign key problems

	return knex.schema
		.dropTable('answer')
		.dropTable('question')
		.dropTable('user')
}
