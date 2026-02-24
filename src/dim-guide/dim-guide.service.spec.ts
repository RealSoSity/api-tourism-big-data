import { Test, TestingModule } from '@nestjs/testing';
import { DimGuideService } from './dim-guide.service';

describe('DimGuideService', () => {
  let service: DimGuideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimGuideService],
    }).compile();

    service = module.get<DimGuideService>(DimGuideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
