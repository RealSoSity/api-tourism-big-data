import { Test, TestingModule } from '@nestjs/testing';
import { DimBookingService } from './dim-booking.service';

describe('DimBookingService', () => {
  let service: DimBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimBookingService],
    }).compile();

    service = module.get<DimBookingService>(DimBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
