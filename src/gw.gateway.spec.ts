import { Test, TestingModule } from '@nestjs/testing';
import { GwGateway } from './gw.gateway';

describe('GwGateway', () => {
  let gateway: GwGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GwGateway],
    }).compile();

    gateway = module.get<GwGateway>(GwGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
