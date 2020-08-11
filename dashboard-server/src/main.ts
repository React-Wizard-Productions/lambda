import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/configService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(configService.getPort());
}
bootstrap();
