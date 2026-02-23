import { PartialType } from '@nestjs/mapped-types';
import { CreateDimTourDto } from './create-dim-tour.dto';

export class UpdateDimTourDto extends PartialType(CreateDimTourDto) {}
