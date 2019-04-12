
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Games').del()
    .then(function () {
      // Inserts seed entries
      return knex('Games').insert([
        { id: 1, genre: 'Arcade', title: 'Pacman', releaseYear: 1980 },
        { id: 2, genre: 'FPS', title: "Overwatch", releaseYear: 2016 },
        { id: 3, genre: 'FPS', title: 'Counter-Strike: Global Offensive', releaseYear: 2012 }
      ]);
    });
};
