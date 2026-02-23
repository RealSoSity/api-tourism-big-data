import { Test, TestingModule } from '@nestjs/testing';
import { DimCustomerController } from './dim-customer.controller';
import { DimCustomerService } from './dim-customer.service';

describe('DimCustomerController', () => {
  let controller: DimCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimCustomerController],
      providers: [DimCustomerService],
    }).compile();

    controller = module.get<DimCustomerController>(DimCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
