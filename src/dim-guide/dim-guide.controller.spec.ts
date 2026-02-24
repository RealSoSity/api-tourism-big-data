import { Test, TestingModule } from '@nestjs/testing';
import { DimGuideController } from './dim-guide.controller';
import { DimGuideService } from './dim-guide.service';

describe('DimGuideController', () => {
  let controller: DimGuideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimGuideController],
      providers: [DimGuideService],
    }).compile();

    controller = module.get<DimGuideController>(DimGuideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
