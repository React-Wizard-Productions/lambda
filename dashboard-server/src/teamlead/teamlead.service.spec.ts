import { Test, TestingModule } from '@nestjs/testing';
import { TeamleadService } from './teamlead.service';

describe('TeamleadService', () => {
  let service: TeamleadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamleadService],
    }).compile();

    service = module.get<TeamleadService>(TeamleadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
