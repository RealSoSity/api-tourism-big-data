import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FactTripPerformance } from './entities/fact-trip-performance.entity';

@Injectable()
export class FactTripPerformanceService {
  constructor(
    @InjectModel(FactTripPerformance)
    private factModel: typeof FactTripPerformance,
  ) {}

  async findAll() {
    return await this.factModel.findAll({ order: [['FACTID', 'DESC']] });
  }

  async findOne(id: number) {
    const data = await this.factModel.findOne({ where: { FactID: id } });
    if (!data) {
      throw new NotFoundException(`Not found Fact ${id}`);
    }
    return data;
  }
}
