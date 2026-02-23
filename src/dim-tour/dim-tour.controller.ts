import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DimTourService } from './dim-tour.service';
import { CreateDimTourDto } from './dto/create-dim-tour.dto';
import { UpdateDimTourDto } from './dto/update-dim-tour.dto';

@Controller('dim-tour')
export class DimTourController {
  constructor(private readonly dimTourService: DimTourService) {}

  @Post()
  create(@Body() createDimTourDto: CreateDimTourDto) {
    return this.dimTourService.create(createDimTourDto);
  }

  @Get()
  findAll() {
    return this.dimTourService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dimTourService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDimTourDto: UpdateDimTourDto) {
    return this.dimTourService.update(+id, updateDimTourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dimTourService.remove(+id);
  }
}
