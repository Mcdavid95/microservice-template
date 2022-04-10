import { EnvironmentService } from './src/configs';
import { ConfigObject, Connection } from './src/database';

class KnexFile {
  private static getConnection(): Connection {
    const {
      db_host, db_password,
      db_user, db_name, db_port,
    } = EnvironmentService.getAll();

    return {
      host: db_host,
      user: db_user,
      password: db_password,
      database: db_name,
      port: db_port,
    };
  }

  private static getConfig(): ConfigObject {
    return {
      client: 'pg',
      connection: KnexFile.getConnection(),
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: './src/database/migrations',
        tableName: 'account_service_migrations',
        extension: 'ts',
      },
      seeds: {
        directory: './src/database/seeds',
        extension: 'ts',
      },
    };
  }

  public static getConfigEnvironments(): ConfigObject {
    const config = KnexFile.getConfig();
    const { node_env: nodeEnv } = EnvironmentService.getAll();

    return {
      development: config,

      staging: config,

      production: config,

      test: { ...config, debug: true }
    }[nodeEnv];
  }
}

module.exports = KnexFile.getConfigEnvironments();
