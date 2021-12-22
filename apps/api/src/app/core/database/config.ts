import { ConnectionOptions } from 'typeorm';

export const dbOptions: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  port: process.env.DB_PORT as unknown as number,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: ['error'],

  // We don't want to automatically load the model to the DB
  synchronize: false,
};
