import { Module, Global } from '@nestjs/common';
import knex from 'knex';
import { Model } from 'objection';
import {
  DbAddressModule,
  DbBaseModelModule,
  DbBusinessModule,
  DbDeviceModule,
  DbDocumentModule,
  DbLocationModule,
  DbLoginModule,
  DbPasswordResetModule,
  DbPermissionModule,
  DbRoleModule,
  DbRolePermissionModule,
  DbUserRoleModule
} from './models';
import { DATABASE_TOKEN } from './database.token';
import * as knexConfig from '../../knexfile';

const providers = [
  {
    provide: DATABASE_TOKEN.KnexConnection,
    useFactory: async () => {
      const knexClient = await knexConfig;
      const dbConnection = knex(knexClient);

      /*
      * @description: Initialize Knex instance -
      * giving objection access to db connection
      */
      Model.knex(dbConnection);

      // return an instance of knex db connection
      return dbConnection;
    },
  },
];

@Global()
@Module({
  providers,
  imports: [
    DbBaseModelModule,
    DbAddressModule,
    DbBusinessModule,
    DbDeviceModule,
    DbDocumentModule,
    DbLocationModule,
    DbLoginModule,
    DbPasswordResetModule,
    DbPermissionModule,
    DbRolePermissionModule,
    DbRoleModule,
    DbUserRoleModule,
  ],
  exports: [
    DbBaseModelModule,
    DbAddressModule,
    DbBusinessModule,
    DbDeviceModule,
    DbDocumentModule,
    DbLocationModule,
    DbLoginModule,
    DbPasswordResetModule,
    DbPermissionModule,
    DbRolePermissionModule,
    DbRoleModule,
    DbUserRoleModule,
  ],
})
export class DatabaseModule {}
