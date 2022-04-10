import { Knex } from 'knex';
import { DatabaseSchema } from '../database.schema';
import { DatabaseTable } from '../database.tables';

export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(DatabaseSchema.accountService)
      .then(() => trx.schema.hasTable(DatabaseTable.roles_permissions)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(DatabaseSchema.accountService)
              .createTable(DatabaseTable.roles_permissions, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${DatabaseTable.roles_permissions}_id` });
                tableBuilder
                  .uuid('role_id')
                  .notNullable();
                tableBuilder
                  .uuid('permission_id')
                  .notNullable();
                tableBuilder
                  .timestamps(true, true);

                tableBuilder
                  .foreign('role_id')
                  .references('id')
                  .inTable(`${DatabaseSchema.accountService}.${DatabaseTable.roles}`)
                tableBuilder
                  .foreign('permission_id')
                  .references('id')
                  .inTable(`${DatabaseSchema.accountService}.${DatabaseTable.permissions}`);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(DatabaseSchema.accountService).dropTableIfExists(DatabaseTable.roles_permissions);
}
