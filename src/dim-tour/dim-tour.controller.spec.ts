import { Test, TestingModule } from '@nestjs/testing';
import { DimTourController } from './dim-tour.controller';
import { DimTourService } from './dim-tour.service';

describe('DimTourController', () => {
  let controller: DimTourController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimTourController],
      providers: [DimTourService],
    }).compile();

    controller = module.get<DimTourController>(DimTourController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
