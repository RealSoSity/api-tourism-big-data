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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
