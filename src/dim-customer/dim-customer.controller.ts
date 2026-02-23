import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DimCustomerService } from './dim-customer.service';
import { CreateDimCustomerDto } from './dto/create-dim-customer.dto';
import { UpdateDimCustomerDto } from './dto/update-dim-customer.dto';

@Controller('dim-customer')
export class DimCustomerController {
  constructor(private readonly dimCustomerService: DimCustomerService) {}

  @Post()
  create(@Body() createDimCustomerDto: CreateDimCustomerDto) {
    return this.dimCustomerService.create(createDimCustomerDto);
  }

  @Get()
  findAll() {
    return this.dimCustomerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dimCustomerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDimCustomerDto: UpdateDimCustomerDto) {
    return this.dimCustomerService.update(+id, updateDimCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dimCustomerService.remove(+id);
  }
}
