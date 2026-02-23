import { PartialType } from '@nestjs/mapped-types';
import { CreateFactRevenueAnalysisDto } from './create-fact-revenue-analysis.dto';

export class UpdateFactRevenueAnalysisDto extends PartialType(CreateFactRevenueAnalysisDto) {}
