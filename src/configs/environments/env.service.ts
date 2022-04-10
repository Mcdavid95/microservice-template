import { config } from 'dotenv';
import { EnvironmentVariables } from './env.interface';

config();

export class EnvironmentService {
  public static getAll(): EnvironmentVariables {
    return {
      azure_storage_account: process.env.AZURE_STORAGE_ACCOUNT,
      azure_storage_container: process.env.AZURE_STORAGE_CONTAINER,
      azure_storage_key: process.env.AZURE_STORAGE_KEY,
      db_host: process.env.DB_HOST,
      db_name: process.env.DB_NAME,
      db_password: process.env.DB_PASSWORD,
      db_port: Number(process.env.DB_PORT),
      db_user: process.env.DB_USER,
      jwt_secret: process.env.JWT_SECRET,
      mail_from: process.env.MAIL_FROM,
      mail_host: process.env.MAIL_HOST,
      mail_password: process.env.MAIL_PASSWORD,
      mail_port: Number(process.env.MAIL_PORT),
      mail_user: process.env.MAIL_USER,
      redis_host: process.env.REDIS_HOST,
      redis_password: process.env.REDIS_PASSWORD,
      redis_port: Number(process.env.REDIS_PORT),
      node_env: process.env.NODE_ENV,
      port: Number(process.env.PORT),
      rabbitmq_host: process.env.RABBITMQ_HOST,
      rabbitmq_password: process.env.RABBITMQ_PASSWORD,
      rabbitmq_port: Number(process.env.RABBITMQ_PORT),
      rabbitmq_user: process.env.RABBITMQ_USER,
    }
  }

  public static getValue(key: string): string {
    return EnvironmentService.getAll()[key.toLocaleLowerCase()];
  }
}
