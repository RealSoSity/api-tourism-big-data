import { Test, TestingModule } from '@nestjs/testing';
import { FactTripPerformanceController } from './fact-trip-performance.controller';
import { FactTripPerformanceService } from './fact-trip-performance.service';

describe('FactTripPerformanceController', () => {
  let controller: FactTripPerformanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactTripPerformanceController],
      providers: [FactTripPerformanceService],
    }).compile();

    controller = module.get<FactTripPerformanceController>(FactTripPerformanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
