import { Controller, Get, Param } from '@nestjs/common';
import { FactRevenueAnalysisService } from './fact-revenue-analysis.service';

@Controller('fact-revenue-analysis')
export class FactRevenueAnalysisController {
  constructor(
    private readonly factRevenueAnalysisService: FactRevenueAnalysisService,
  ) {}

  @Get()
  findAll() {
    return this.factRevenueAnalysisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factRevenueAnalysisService.findOne(+id);
  }
}
