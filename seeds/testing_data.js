
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        { id: 1, name: 'apple', class: "12" },
        { id: 2, name: 'google', class: "12" },
        { id: 3, name: 'samsung', class: "12" }
      ]);
    });
};
