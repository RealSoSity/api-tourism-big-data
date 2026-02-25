import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DepartmentModule } from './department/department.module';
import { FactRevenueAnalysisModule } from './fact-revenue-analysis/fact-revenue-analysis.module';
import { DimDateModule } from './dim-date/dim-date.module';
import { DimTourModule } from './dim-tour/dim-tour.module';
import { DimCustomerModule } from './dim-customer/dim-customer.module';
import { FactTripPerformanceModule } from './fact-trip-performance/fact-trip-performance.module';
import { DimGuideModule } from './dim-guide/dim-guide.module';
import { DimBookingModule } from './dim-booking/dim-booking.module';
import { FactBookingStatusModule } from './fact-booking-status/fact-booking-status.module';
import { IotTelemetryModule } from './iot-telemetry/iot-telemetry.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'oracle',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SERVICE,
      synchronize: false,
      autoLoadModels: true,
    }),
    DepartmentModule,
    FactRevenueAnalysisModule,
    DimDateModule,
    DimTourModule,
    DimCustomerModule,
    FactTripPerformanceModule,
    DimGuideModule,
    DimBookingModule,
    FactBookingStatusModule,
    IotTelemetryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
