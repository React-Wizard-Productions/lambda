import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

class ConfigService {
  constructor(private env: { [key: string]: string }) {}

  private getValue(key: string, throwOnMissing = true) {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`Missing Envionmental Variable env.${key}`);
    }
    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(key => this.getValue(key, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public getSecret() {
    return this.getValue('JWT_SECRET', true);
  }

  public isProduction() {
    return this.getValue('NODE_ENV', false) === 'production';
  }

  public isDocker() {
    return this.getValue('MODE', false) === 'docker'
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('DB_HOST'),
      port: parseInt(this.getValue('DB_PORT')),
      username: this.getValue('DB_USER'),
      password: this.getValue('DB_PASS'),
      database: this.getValue('DB_NAME'),
      entities: [`${this.isDocker ? 'dist' : ''}/**/*.entity.js`],
      migrationsTableName: 'migrations',
      migrations: [`dist/migration/*.js`],
      cli: {
        migrationsDir: `src/migration`,
      },
      ssl: this.isProduction(),
    };
  }
}

export const configService = new ConfigService(process.env).ensureValues([
  'DB_USER',
  'DB_PASS',
  'DB_PORT',
  'DB_NAME',
  'DB_HOST',
]);
