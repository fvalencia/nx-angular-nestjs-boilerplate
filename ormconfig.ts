import { dbOptions } from './apps/api/src/app/core/database/config';

module.exports = {
  ...dbOptions,
  entities: ['apps/api/src/app/modules/**/*.entity{.ts,.js}'],
  migrations: ['apps/api/src/app/core/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'apps/api/src/app/core/database/migrations',
  },
};
