import { Injectable } from '@nestjs/common';
import { CreateDimTourDto } from './dto/create-dim-tour.dto';
import { UpdateDimTourDto } from './dto/update-dim-tour.dto';

@Injectable()
export class DimTourService {
  create(createDimTourDto: CreateDimTourDto) {
    return 'This action adds a new dimTour';
  }

  findAll() {
    return `This action returns all dimTour`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dimTour`;
  }

  update(id: number, updateDimTourDto: UpdateDimTourDto) {
    return `This action updates a #${id} dimTour`;
  }

  remove(id: number) {
    return `This action removes a #${id} dimTour`;
  }
}
