import { Test, TestingModule } from '@nestjs/testing';
import { DimDateService } from './dim-date.service';

describe('DimDateService', () => {
  let service: DimDateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimDateService],
    }).compile();

    service = module.get<DimDateService>(DimDateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
