import { Knex } from 'knex';
import { DatabaseSchema } from '../database.schema';
import { DatabaseTable } from '../database.tables';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(DatabaseSchema.accountService)
      .then(() => trx.schema.hasTable(DatabaseTable.roles)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(DatabaseSchema.accountService)
              .createTable(DatabaseTable.roles, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${DatabaseTable.roles}_id` });
                tableBuilder
                  .string('role')
                  .notNullable();
                tableBuilder
                  .string('desc');
                tableBuilder
                  .string('slug')
                  .notNullable();
                tableBuilder
                  .string('app_name')
                  .notNullable();
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(DatabaseSchema.accountService).dropTableIfExists(DatabaseTable.roles);
}
