import { Test, TestingModule } from '@nestjs/testing';
import { FactBookingStatusService } from './fact-booking-status.service';

describe('FactBookingStatusService', () => {
  let service: FactBookingStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactBookingStatusService],
    }).compile();

    service = module.get<FactBookingStatusService>(FactBookingStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
