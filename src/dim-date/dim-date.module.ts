import { Module } from '@nestjs/common';
import { DimDateService } from './dim-date.service';
import { DimDateController } from './dim-date.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DimDate } from './entities/dim-date.entity';

@Module({
  imports: [SequelizeModule.forFeature([DimDate])],
  controllers: [DimDateController],
  providers: [DimDateService],
})
export class DimDateModule {}
