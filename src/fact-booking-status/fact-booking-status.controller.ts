import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactBookingStatusService } from './fact-booking-status.service';
import { CreateFactBookingStatusDto } from './dto/create-fact-booking-status.dto';
import { UpdateFactBookingStatusDto } from './dto/update-fact-booking-status.dto';

@Controller('fact-booking-status')
export class FactBookingStatusController {
  constructor(private readonly factBookingStatusService: FactBookingStatusService) {}

  @Post()
  create(@Body() createFactBookingStatusDto: CreateFactBookingStatusDto) {
    return this.factBookingStatusService.create(createFactBookingStatusDto);
  }

  @Get()
  findAll() {
    return this.factBookingStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factBookingStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactBookingStatusDto: UpdateFactBookingStatusDto) {
    return this.factBookingStatusService.update(+id, updateFactBookingStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factBookingStatusService.remove(+id);
  }
}
