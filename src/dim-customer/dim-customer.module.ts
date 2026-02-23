import { Module } from '@nestjs/common';
import { DimCustomerService } from './dim-customer.service';
import { DimCustomerController } from './dim-customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DimCustomer } from './entities/dim-customer.entity';

@Module({
  imports: [SequelizeModule.forFeature([DimCustomer])],
  controllers: [DimCustomerController],
  providers: [DimCustomerService],
})
export class DimCustomerModule {}
