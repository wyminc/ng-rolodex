
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "wyminc",
          name: "Wymin Chan",
          email: "aashcroft0@engadget.com",
          address: "871 Sullivan Terrace"
        }, {
          username: "esheffield1",
          name: "Edwin Sheffield",
          email: "esheffield1@mtv.com",
          address: "42208 Lukken Trail"
        }, {
          username: "vskamal2",
          name: "Viva Skamal",
          email: "vskamal2@google.com.au",
          address: "41 Green Drive"
        }
      ]);
    });
};
