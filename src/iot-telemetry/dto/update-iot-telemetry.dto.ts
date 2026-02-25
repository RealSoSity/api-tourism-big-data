import { PartialType } from '@nestjs/mapped-types';
import { CreateIotTelemetryDto } from './create-iot-telemetry.dto';

export class UpdateIotTelemetryDto extends PartialType(CreateIotTelemetryDto) {}
