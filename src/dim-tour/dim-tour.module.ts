import { Module } from '@nestjs/common';
import { DimTourService } from './dim-tour.service';
import { DimTourController } from './dim-tour.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DimTour } from './entities/dim-tour.entity';

@Module({
  imports: [SequelizeModule.forFeature([DimTour])],
  controllers: [DimTourController],
  providers: [DimTourService],
})
export class DimTourModule {}
