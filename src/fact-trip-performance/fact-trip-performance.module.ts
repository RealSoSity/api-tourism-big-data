import { Module } from '@nestjs/common';
import { FactTripPerformanceService } from './fact-trip-performance.service';
import { FactTripPerformanceController } from './fact-trip-performance.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FactTripPerformance } from './entities/fact-trip-performance.entity';

@Module({
  imports: [SequelizeModule.forFeature([FactTripPerformance])],
  controllers: [FactTripPerformanceController],
  providers: [FactTripPerformanceService],
})
export class FactTripPerformanceModule {}
