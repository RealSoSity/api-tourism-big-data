import { Module } from '@nestjs/common';
import { FactRevenueAnalysisService } from './fact-revenue-analysis.service';
import { FactRevenueAnalysisController } from './fact-revenue-analysis.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FactRevenueAnalysis } from './entities/fact-revenue-analysis.entity';

@Module({
  imports: [SequelizeModule.forFeature([FactRevenueAnalysis])],
  controllers: [FactRevenueAnalysisController],
  providers: [FactRevenueAnalysisService],
})
export class FactRevenueAnalysisModule {}
