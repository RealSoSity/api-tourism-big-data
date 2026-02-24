import { Test, TestingModule } from '@nestjs/testing';
import { DimBookingController } from './dim-booking.controller';
import { DimBookingService } from './dim-booking.service';

describe('DimBookingController', () => {
  let controller: DimBookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimBookingController],
      providers: [DimBookingService],
    }).compile();

    controller = module.get<DimBookingController>(DimBookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
