
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('albums').del(),

    // Inserts seed entries
    knex('albums').insert(
      {
        id: 1,
        artist: 'Smashmouth',
        name: 'Astrolounge',
        genre: 'Alternative',
        stars: 4,
        explicit: true
    }),
      knex('albums').insert({
        id: 2,
        artist: 'Kendrick Lamar',
        name: 'To Pimp A Butterfly',
        genre: 'Hip-Hop',
        stars: 5,
        explicit: true
    }),
    knex('albums').insert({
        id: 3,
        artist: 'Big L',
        name: 'Lifestylez Ov Da Poor and Dangerous',
        genre: 'Hip-Hop',
        stars: 4,
        explicit: true
    })
  );
};
