
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Games', table => {
        table.increments();

        table.string('title').notNullable().unique();

        table.string('genre').notNullable();

        table.integer('releaseYear').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Games');
};
