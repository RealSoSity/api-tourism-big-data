import { Injectable } from '@nestjs/common';
import { CreateDimCustomerDto } from './dto/create-dim-customer.dto';
import { UpdateDimCustomerDto } from './dto/update-dim-customer.dto';

@Injectable()
export class DimCustomerService {
  create(createDimCustomerDto: CreateDimCustomerDto) {
    return 'This action adds a new dimCustomer';
  }

  findAll() {
    return `This action returns all dimCustomer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dimCustomer`;
  }

  update(id: number, updateDimCustomerDto: UpdateDimCustomerDto) {
    return `This action updates a #${id} dimCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} dimCustomer`;
  }
}
