import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DimGuideService } from './dim-guide.service';
import { CreateDimGuideDto } from './dto/create-dim-guide.dto';
import { UpdateDimGuideDto } from './dto/update-dim-guide.dto';

@Controller('dim-guide')
export class DimGuideController {
  constructor(private readonly dimGuideService: DimGuideService) {}

  @Post()
  create(@Body() createDimGuideDto: CreateDimGuideDto) {
    return this.dimGuideService.create(createDimGuideDto);
  }

  @Get()
  findAll() {
    return this.dimGuideService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dimGuideService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDimGuideDto: UpdateDimGuideDto) {
    return this.dimGuideService.update(+id, updateDimGuideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dimGuideService.remove(+id);
  }
}
