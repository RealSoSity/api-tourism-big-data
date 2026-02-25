import { Module } from '@nestjs/common';
import { IotTelemetryService } from './iot-telemetry.service';
import { IotTelemetryController } from './iot-telemetry.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { IotTelemetry } from './entities/iot-telemetry.entity';

@Module({
  imports: [SequelizeModule.forFeature([IotTelemetry])],
  controllers: [IotTelemetryController],
  providers: [IotTelemetryService],
})
export class IotTelemetryModule {}
