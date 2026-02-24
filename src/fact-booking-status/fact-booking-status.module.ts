import { Module } from '@nestjs/common';
import { FactBookingStatusService } from './fact-booking-status.service';
import { FactBookingStatusController } from './fact-booking-status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FactBookingStatus } from './entities/fact-booking-status.entity';

@Module({
  imports: [SequelizeModule.forFeature([FactBookingStatus])],
  controllers: [FactBookingStatusController],
  providers: [FactBookingStatusService],
})
export class FactBookingStatusModule {}
