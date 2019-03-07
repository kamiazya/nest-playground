import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HogeController } from './hoge/hoge.controller';
import { GwGateway } from './gw.gateway';
import { FugaModule } from './fuga/fuga.module';

@Module({
  imports: [FugaModule],
  controllers: [AppController, HogeController],
  providers: [AppService, GwGateway],
})
export class AppModule {}
