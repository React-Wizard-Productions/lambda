import { Test, TestingModule } from '@nestjs/testing';
import { TeamleadController } from './teamlead.controller';

describe('Teamlead Controller', () => {
  let controller: TeamleadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamleadController],
    }).compile();

    controller = module.get<TeamleadController>(TeamleadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
