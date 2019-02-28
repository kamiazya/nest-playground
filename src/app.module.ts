import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HogeController } from './hoge/hoge.controller';
import { GwGateway } from './gw.gateway';

@Module({
  imports: [],
  controllers: [AppController, HogeController],
  providers: [AppService, GwGateway],
})
export class AppModule {}
