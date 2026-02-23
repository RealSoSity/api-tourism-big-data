import { PartialType } from '@nestjs/mapped-types';
import { CreateDimDateDto } from './create-dim-date.dto';

export class UpdateDimDateDto extends PartialType(CreateDimDateDto) {}
