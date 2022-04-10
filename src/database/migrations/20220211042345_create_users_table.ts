import { Knex } from 'knex';
import { DatabaseSchema } from '../database.schema';
import { DatabaseTable } from '../database.tables';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(DatabaseSchema.accountService)
      .then(() => trx.schema.hasTable(DatabaseTable.users)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(DatabaseSchema.accountService)
              .createTable(DatabaseTable.users, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${DatabaseTable.users}_id` });
                tableBuilder
                  .string('first_name')
                  .notNullable();
                tableBuilder
                  .string('last_name')
                  .notNullable();
                tableBuilder
                  .string('username')
                  .unique();
                tableBuilder
                  .date('dob');
                tableBuilder
                  .string('password')
                  .notNullable();
                tableBuilder
                  .string('gender');
                tableBuilder
                  .string('email')
                  .unique()
                  .notNullable();
                tableBuilder
                  .boolean('email_verified')
                  .defaultTo(false);
                tableBuilder
                  .string('phone')
                  .unique()
                  .notNullable();
                tableBuilder
                  .boolean('phone_verified')
                  .defaultTo(false);
                tableBuilder
                  .string('marital_status');
                tableBuilder
                  .boolean('is_active')
                  .defaultTo(true);
                tableBuilder
                  .string('bvn');
                tableBuilder
                  .boolean('bvn_verified')
                  .defaultTo(false);
                tableBuilder
                  .datetime('deleted_at');
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(DatabaseSchema.accountService).dropTableIfExists(DatabaseTable.users);
}
