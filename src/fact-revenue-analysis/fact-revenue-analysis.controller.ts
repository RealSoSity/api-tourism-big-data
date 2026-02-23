import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactRevenueAnalysisService } from './fact-revenue-analysis.service';
import { CreateFactRevenueAnalysisDto } from './dto/create-fact-revenue-analysis.dto';
import { UpdateFactRevenueAnalysisDto } from './dto/update-fact-revenue-analysis.dto';

@Controller('fact-revenue-analysis')
export class FactRevenueAnalysisController {
  constructor(private readonly factRevenueAnalysisService: FactRevenueAnalysisService) {}

  @Post()
  create(@Body() createFactRevenueAnalysisDto: CreateFactRevenueAnalysisDto) {
    return this.factRevenueAnalysisService.create(createFactRevenueAnalysisDto);
  }

  @Get()
  findAll() {
    return this.factRevenueAnalysisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factRevenueAnalysisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactRevenueAnalysisDto: UpdateFactRevenueAnalysisDto) {
    return this.factRevenueAnalysisService.update(+id, updateFactRevenueAnalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factRevenueAnalysisService.remove(+id);
  }
}
