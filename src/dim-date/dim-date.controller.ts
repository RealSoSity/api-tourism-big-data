import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DimDateService } from './dim-date.service';
import { CreateDimDateDto } from './dto/create-dim-date.dto';
import { UpdateDimDateDto } from './dto/update-dim-date.dto';

@Controller('dim-date')
export class DimDateController {
  constructor(private readonly dimDateService: DimDateService) {}

  @Post()
  create(@Body() createDimDateDto: CreateDimDateDto) {
    return this.dimDateService.create(createDimDateDto);
  }

  @Get()
  findAll() {
    return this.dimDateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dimDateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDimDateDto: UpdateDimDateDto) {
    return this.dimDateService.update(+id, updateDimDateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dimDateService.remove(+id);
  }
}
