import { Test, TestingModule } from '@nestjs/testing';
import { DimCustomerService } from './dim-customer.service';

describe('DimCustomerService', () => {
  let service: DimCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimCustomerService],
    }).compile();

    service = module.get<DimCustomerService>(DimCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
