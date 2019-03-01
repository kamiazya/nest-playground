import { Controller, Get, Req, Logger } from '@nestjs/common';

@Controller('hoge')
export class HogeController {
  private readonly logger = new Logger(HogeController.name);

  @Get()
  findAll() {
    this.logger.log('aaa');
    return 'This action returns all cats';
  }
}
