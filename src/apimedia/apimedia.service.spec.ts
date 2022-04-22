import { Test, TestingModule } from '@nestjs/testing';
import { ApimediaService } from './apimedia.service';

describe('ApimediaService', () => {
  let service: ApimediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApimediaService],
    }).compile();

    service = module.get<ApimediaService>(ApimediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
