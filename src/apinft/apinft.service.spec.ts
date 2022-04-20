import { Test, TestingModule } from '@nestjs/testing';
import { ApinftService } from './apinft.service';

describe('ApinftService', () => {
  let service: ApinftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApinftService],
    }).compile();

    service = module.get<ApinftService>(ApinftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
