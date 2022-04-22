import { Test, TestingModule } from '@nestjs/testing';
import { ApimediaController } from './apimedia.controller';
import { ApimediaService } from './apimedia.service';

describe('ApimediaController', () => {
  let controller: ApimediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApimediaController],
      providers: [ApimediaService],
    }).compile();

    controller = module.get<ApimediaController>(ApimediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
