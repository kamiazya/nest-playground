import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HogeController } from './hoge/hoge.controller';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const ctx = await NestFactory.createApplicationContext(AppModule);
  const hogeController = ctx
    .select(AppModule)
    .get(HogeController, { strict: true });
  const result = await hogeController.findAll();
  const logger = new Logger();
  logger.log({ result });
  await app.listen(3000);
}
bootstrap();
