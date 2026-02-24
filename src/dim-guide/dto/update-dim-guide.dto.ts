import { PartialType } from '@nestjs/mapped-types';
import { CreateDimGuideDto } from './create-dim-guide.dto';

export class UpdateDimGuideDto extends PartialType(CreateDimGuideDto) {}
