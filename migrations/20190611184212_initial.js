
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('student', function (table) {
      table.increments('id').primary()
      table.string('name')
      table.string('class')
      table.timestamps(true, true)
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('student')
  ])
};
