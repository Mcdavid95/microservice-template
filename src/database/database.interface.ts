export interface IndexAccessor {
  [name: string]: ConfigObject;
}

export interface KnexConfigEnvironments extends IndexAccessor {
  development: ConfigObject;
  staging: ConfigObject;
  production: ConfigObject;
}

export interface Connection {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
  ssl?: any;
}

export interface Pool {
  min: number;
  max: number;
}

export interface Migrations {
  directory: string;
  tableName: string;
  extension: string;
}

export interface Seeds {
  directory: string;
  extension: string;
}

export interface ConfigObject {
  client: string;
  connection: Connection;
  pool: Pool;
  migrations: Migrations,
  seeds: Seeds;
  debug?: boolean;
}
