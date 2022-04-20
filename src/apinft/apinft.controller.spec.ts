import { Test, TestingModule } from '@nestjs/testing';
import { ApinftController } from './apinft.controller';

describe('ApinftController', () => {
  let controller: ApinftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApinftController],
    }).compile();

    controller = module.get<ApinftController>(ApinftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
