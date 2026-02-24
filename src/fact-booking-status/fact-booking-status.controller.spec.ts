import { Test, TestingModule } from '@nestjs/testing';
import { FactBookingStatusController } from './fact-booking-status.controller';
import { FactBookingStatusService } from './fact-booking-status.service';

describe('FactBookingStatusController', () => {
  let controller: FactBookingStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactBookingStatusController],
      providers: [FactBookingStatusService],
    }).compile();

    controller = module.get<FactBookingStatusController>(FactBookingStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
