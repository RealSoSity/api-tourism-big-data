import { Test, TestingModule } from '@nestjs/testing';
import { DimTourService } from './dim-tour.service';

describe('DimTourService', () => {
  let service: DimTourService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimTourService],
    }).compile();

    service = module.get<DimTourService>(DimTourService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
