import { Test, TestingModule } from '@nestjs/testing';
import { FactRevenueAnalysisService } from './fact-revenue-analysis.service';

describe('FactRevenueAnalysisService', () => {
  let service: FactRevenueAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactRevenueAnalysisService],
    }).compile();

    service = module.get<FactRevenueAnalysisService>(FactRevenueAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
