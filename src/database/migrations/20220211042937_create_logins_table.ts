import { Knex } from 'knex';
import { DatabaseSchema } from '../database.schema';
import { DatabaseTable } from '../database.tables';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(DatabaseSchema.accountService)
      .then(() => trx.schema.hasTable(DatabaseTable.logins)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(DatabaseSchema.accountService)
              .createTable(DatabaseTable.logins, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${DatabaseTable.logins}_id` });
                tableBuilder
                  .datetime('last_login');
                tableBuilder
                  .uuid('user_id')
                  .notNullable()
                tableBuilder
                  .uuid('device_id')
                  .notNullable()
                tableBuilder
                  .uuid('location_id')
                  .notNullable()
                tableBuilder
                  .timestamps(true, true);

                tableBuilder
                  .foreign('user_id')
                  .references('id')
                  .inTable(`${DatabaseSchema.accountService}.${DatabaseTable.users}`)
                tableBuilder
                  .foreign('device_id')
                  .references('id')
                  .inTable(`${DatabaseSchema.accountService}.${DatabaseTable.devices}`)
                tableBuilder
                  .foreign('location_id')
                  .references('id')
                  .inTable(`${DatabaseSchema.accountService}.${DatabaseTable.locations}`)
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(DatabaseSchema.accountService).dropTableIfExists(DatabaseTable.logins);
}
