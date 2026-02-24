import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FactRevenueAnalysis } from './entities/fact-revenue-analysis.entity';

@Injectable()
export class FactRevenueAnalysisService {
  constructor(
    @InjectModel(FactRevenueAnalysis)
    private factRevenueModel: typeof FactRevenueAnalysis,
  ) {}

  findAll() {
    return this.factRevenueModel.findAll();
  }

  async findOne(id: number) {
    const factRev = await this.factRevenueModel.findOne({
      where: {
        FactID: id,
      },
    });

    if (!factRev) {
      throw new NotFoundException(
        `Not found Fact-Revenue that have Fact ID: ${id}`,
      );
    }

    return factRev;
  }
}
