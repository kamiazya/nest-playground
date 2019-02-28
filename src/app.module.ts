import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HogeController } from './hoge/hoge.controller';

@Module({
  imports: [],
  controllers: [AppController, HogeController],
  providers: [AppService],
})
export class AppModule {}
