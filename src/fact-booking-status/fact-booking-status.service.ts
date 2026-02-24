import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FactBookingStatus } from './entities/fact-booking-status.entity';

@Injectable()
export class FactBookingStatusService {
  constructor(
    @InjectModel(FactBookingStatus)
    private factModel: typeof FactBookingStatus,
  ) {}

  async findAll() {
    return await this.factModel.findAll({ order: [['FACTID', 'DESC']] });
  }

  async findOne(id: number) {
    const factData = await this.factModel.findOne({ where: { FactID: id } });
    if (!factData) {
      throw new NotFoundException(`Not found FactBookingStatus ${id}`);
    }
    return factData;
  }
}
