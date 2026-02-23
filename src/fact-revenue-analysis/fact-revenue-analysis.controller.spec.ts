import { Test, TestingModule } from '@nestjs/testing';
import { FactRevenueAnalysisController } from './fact-revenue-analysis.controller';
import { FactRevenueAnalysisService } from './fact-revenue-analysis.service';

describe('FactRevenueAnalysisController', () => {
  let controller: FactRevenueAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactRevenueAnalysisController],
      providers: [FactRevenueAnalysisService],
    }).compile();

    controller = module.get<FactRevenueAnalysisController>(FactRevenueAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
