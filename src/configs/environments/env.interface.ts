export interface EnvironmentVariables {
  // DB Envs
  db_host?: string;
  db_port: number;
  db_name: string;
  db_user: string;
  db_password: string;

  // JWT Envs
  jwt_secret: string;

  // Mail Envs
  mail_host?: string;
  mail_port?: number;
  mail_user?: string;
  mail_password?: string;
  mail_from?: string;

  // Server Envs
  port?: number;
  node_env?: string;

  // Azure Envs
  azure_storage_account?: string;
  azure_storage_key?: string;
  azure_storage_container?: string;

  // Redis Envs
  redis_host?: string;
  redis_port?: number;
  redis_password?: string;

  // RabbitMQ Envs
  rabbitmq_host?: string;
  rabbitmq_port?: number;
  rabbitmq_user?: string;
  rabbitmq_password?: string;
}
