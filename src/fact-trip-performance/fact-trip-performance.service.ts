import { Injectable } from '@nestjs/common';
import { CreateFactTripPerformanceDto } from './dto/create-fact-trip-performance.dto';
import { UpdateFactTripPerformanceDto } from './dto/update-fact-trip-performance.dto';

@Injectable()
export class FactTripPerformanceService {
  create(createFactTripPerformanceDto: CreateFactTripPerformanceDto) {
    return 'This action adds a new factTripPerformance';
  }

  findAll() {
    return `This action returns all factTripPerformance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factTripPerformance`;
  }

  update(id: number, updateFactTripPerformanceDto: UpdateFactTripPerformanceDto) {
    return `This action updates a #${id} factTripPerformance`;
  }

  remove(id: number) {
    return `This action removes a #${id} factTripPerformance`;
  }
}
