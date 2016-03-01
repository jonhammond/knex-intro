// exports.up is an update to a table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', function(table) {
    table.increments();
    table.string('artist');
    table.string('name');
    table.string('genre');
    table.integer('stars');
    table.boolean('explicit');
  });
};

// exports.down goes back to before the update
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums');
};
