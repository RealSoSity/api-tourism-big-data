import { Controller, Get, Param } from '@nestjs/common';
import { FactBookingStatusService } from './fact-booking-status.service';

@Controller('fact-booking-status')
export class FactBookingStatusController {
  constructor(
    private readonly factBookingStatusService: FactBookingStatusService,
  ) {}

  @Get()
  findAll() {
    return this.factBookingStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factBookingStatusService.findOne(+id);
  }
}
