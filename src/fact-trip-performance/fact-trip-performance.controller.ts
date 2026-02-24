import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactTripPerformanceService } from './fact-trip-performance.service';
import { CreateFactTripPerformanceDto } from './dto/create-fact-trip-performance.dto';
import { UpdateFactTripPerformanceDto } from './dto/update-fact-trip-performance.dto';

@Controller('fact-trip-performance')
export class FactTripPerformanceController {
  constructor(private readonly factTripPerformanceService: FactTripPerformanceService) {}

  @Post()
  create(@Body() createFactTripPerformanceDto: CreateFactTripPerformanceDto) {
    return this.factTripPerformanceService.create(createFactTripPerformanceDto);
  }

  @Get()
  findAll() {
    return this.factTripPerformanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factTripPerformanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactTripPerformanceDto: UpdateFactTripPerformanceDto) {
    return this.factTripPerformanceService.update(+id, updateFactTripPerformanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factTripPerformanceService.remove(+id);
  }
}
