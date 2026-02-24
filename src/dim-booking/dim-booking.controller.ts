import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DimBookingService } from './dim-booking.service';
import { CreateDimBookingDto } from './dto/create-dim-booking.dto';
import { UpdateDimBookingDto } from './dto/update-dim-booking.dto';

@Controller('dim-booking')
export class DimBookingController {
  constructor(private readonly dimBookingService: DimBookingService) {}

  @Post()
  create(@Body() createDimBookingDto: CreateDimBookingDto) {
    return this.dimBookingService.create(createDimBookingDto);
  }

  @Get()
  findAll() {
    return this.dimBookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dimBookingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDimBookingDto: UpdateDimBookingDto) {
    return this.dimBookingService.update(+id, updateDimBookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dimBookingService.remove(+id);
  }
}
