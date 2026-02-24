import { Module } from '@nestjs/common';
import { DimGuideService } from './dim-guide.service';
import { DimGuideController } from './dim-guide.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DimGuide } from './entities/dim-guide.entity';

@Module({
  imports: [SequelizeModule.forFeature([DimGuide])],
  controllers: [DimGuideController],
  providers: [DimGuideService],
})
export class DimGuideModule {}
