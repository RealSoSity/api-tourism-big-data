import { Injectable } from '@nestjs/common';
import { CreateDimDateDto } from './dto/create-dim-date.dto';
import { UpdateDimDateDto } from './dto/update-dim-date.dto';

@Injectable()
export class DimDateService {
  create(createDimDateDto: CreateDimDateDto) {
    return 'This action adds a new dimDate';
  }

  findAll() {
    return `This action returns all dimDate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dimDate`;
  }

  update(id: number, updateDimDateDto: UpdateDimDateDto) {
    return `This action updates a #${id} dimDate`;
  }

  remove(id: number) {
    return `This action removes a #${id} dimDate`;
  }
}
