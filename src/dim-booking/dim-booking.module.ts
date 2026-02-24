import { Module } from '@nestjs/common';
import { DimBookingService } from './dim-booking.service';
import { DimBookingController } from './dim-booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DimBooking } from './entities/dim-booking.entity';

@Module({
  imports: [SequelizeModule.forFeature([DimBooking])],
  controllers: [DimBookingController],
  providers: [DimBookingService],
})
export class DimBookingModule {}
