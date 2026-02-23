import { Test, TestingModule } from '@nestjs/testing';
import { DimDateController } from './dim-date.controller';
import { DimDateService } from './dim-date.service';

describe('DimDateController', () => {
  let controller: DimDateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimDateController],
      providers: [DimDateService],
    }).compile();

    controller = module.get<DimDateController>(DimDateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
