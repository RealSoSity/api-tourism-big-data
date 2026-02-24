import { Injectable } from '@nestjs/common';
import { CreateDimGuideDto } from './dto/create-dim-guide.dto';
import { UpdateDimGuideDto } from './dto/update-dim-guide.dto';

@Injectable()
export class DimGuideService {
  create(createDimGuideDto: CreateDimGuideDto) {
    return 'This action adds a new dimGuide';
  }

  findAll() {
    return `This action returns all dimGuide`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dimGuide`;
  }

  update(id: number, updateDimGuideDto: UpdateDimGuideDto) {
    return `This action updates a #${id} dimGuide`;
  }

  remove(id: number) {
    return `This action removes a #${id} dimGuide`;
  }
}
