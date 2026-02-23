import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFactRevenueAnalysisDto } from './dto/create-fact-revenue-analysis.dto';
import { UpdateFactRevenueAnalysisDto } from './dto/update-fact-revenue-analysis.dto';
import { InjectModel } from '@nestjs/sequelize';
import { FactRevenueAnalysis } from './entities/fact-revenue-analysis.entity';

@Injectable()
export class FactRevenueAnalysisService {
  constructor(
    @InjectModel(FactRevenueAnalysis)
    private factRevenueModel: typeof FactRevenueAnalysis,
  ) {}

  create(createFactRevenueAnalysisDto: CreateFactRevenueAnalysisDto) {}

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

  update(
    id: number,
    updateFactRevenueAnalysisDto: UpdateFactRevenueAnalysisDto,
  ) {
    return `This action updates a #${id} factRevenueAnalysis`;
  }

  remove(id: number) {
    return `This action removes a #${id} factRevenueAnalysis`;
  }
}
