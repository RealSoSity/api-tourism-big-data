import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIotTelemetryDto } from './dto/create-iot-telemetry.dto';
import { UpdateIotTelemetryDto } from './dto/update-iot-telemetry.dto';
import { InjectModel } from '@nestjs/sequelize';
import { IotTelemetry } from './entities/iot-telemetry.entity';

@Injectable()
export class IotTelemetryService {
  constructor(
    @InjectModel(IotTelemetry)
    private readonly model: typeof IotTelemetry,
  ) {}
  create(createIotTelemetryDto: CreateIotTelemetryDto) {
    return this.model.create({
      ...createIotTelemetryDto,
    } as any);
  }

  async createBulk(dtos: CreateIotTelemetryDto[]) {
    return Promise.all(dtos.map((dto) => this.model.create(dto)));
  }

  findAll() {
    return this.model.findAll();
  }

  async findOne(id: number) {
    const row = await this.model.findByPk(id);
    if (!row) throw new NotFoundException('Telemetry not found');
    return row;
  }

  update(id: number, updateIotTelemetryDto: UpdateIotTelemetryDto) {
    return `This action updates a #${id} iotTelemetry`;
  }

  remove(id: number) {
    return `This action removes a #${id} iotTelemetry`;
  }
}
