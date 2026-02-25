import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateIf,
} from 'class-validator';

export class CreateIotTelemetryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  tenantId!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  deviceId!: string;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  sensorId?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  metricCode!: string;

  // Require at least one of valueNumber or valueText
  @ValidateIf((o) => !o.valueText)
  @IsString()
  valueNumber?: string;

  @ValidateIf((o) => !o.valueNumber)
  @IsString()
  @MaxLength(400)
  valueText?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  unit?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  qualityCode?: string;

  @IsOptional()
  @IsString()
  tagsJson?: string; // JSON string
}
