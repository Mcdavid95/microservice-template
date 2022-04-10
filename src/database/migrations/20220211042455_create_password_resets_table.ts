import { Knex } from 'knex';
import { DatabaseSchema } from '../database.schema';
import { DatabaseTable } from '../database.tables';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(DatabaseSchema.accountService)
      .then(() => trx.schema.hasTable(DatabaseTable.password_resets)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(DatabaseSchema.accountService)
              .createTable(DatabaseTable.password_resets, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${DatabaseTable.password_resets}_id` });
                tableBuilder
                  .uuid('user_id')
                  .notNullable();
                tableBuilder
                  .string('token')
                  .notNullable();
                tableBuilder
                  .timestamps(true, true);

                tableBuilder
                  .foreign('user_id')
                  .references('id')
                  .inTable(`${DatabaseSchema.accountService}.${DatabaseTable.users}`)
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(DatabaseSchema.accountService).dropTableIfExists(DatabaseTable.password_resets);
}
