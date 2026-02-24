import { Test, TestingModule } from '@nestjs/testing';
import { FactTripPerformanceService } from './fact-trip-performance.service';

describe('FactTripPerformanceService', () => {
  let service: FactTripPerformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactTripPerformanceService],
    }).compile();

    service = module.get<FactTripPerformanceService>(FactTripPerformanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
