import { Knex } from 'knex';
import { DatabaseSchema } from '../database.schema';
import { DatabaseTable } from '../database.tables';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(DatabaseSchema.accountService)
      .then(() => trx.schema.hasTable(DatabaseTable.devices)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(DatabaseSchema.accountService)
              .createTable(DatabaseTable.devices, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${DatabaseTable.devices}_id` });
                tableBuilder
                  .string('os');
                tableBuilder
                  .string('os_version');
                tableBuilder
                  .string('client');
                tableBuilder
                  .string('client_version');
                tableBuilder
                  .string('device_type')
                tableBuilder
                  .string('device_brand')
                tableBuilder
                  .string('device_model')
                tableBuilder
                  .uuid('user_id')
                  .notNullable()
                tableBuilder
                  .timestamps(true, true);

                tableBuilder
                  .foreign('user_id')
                  .references('id')
                  .inTable(`${DatabaseSchema.accountService}.${DatabaseTable.users}`);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(DatabaseSchema.accountService).dropTableIfExists(DatabaseTable.devices);
}
