import { PartialType } from '@nestjs/mapped-types';
import { CreateFactTripPerformanceDto } from './create-fact-trip-performance.dto';

export class UpdateFactTripPerformanceDto extends PartialType(CreateFactTripPerformanceDto) {}
