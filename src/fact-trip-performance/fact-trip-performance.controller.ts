import { Controller, Get, Param } from '@nestjs/common';
import { FactTripPerformanceService } from './fact-trip-performance.service';

@Controller('fact-trip-performance')
export class FactTripPerformanceController {
  constructor(
    private readonly factTripPerformanceService: FactTripPerformanceService,
  ) {}

  @Get()
  findAll() {
    return this.factTripPerformanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factTripPerformanceService.findOne(+id);
  }
}
