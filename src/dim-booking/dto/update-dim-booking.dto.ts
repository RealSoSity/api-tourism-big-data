import { PartialType } from '@nestjs/mapped-types';
import { CreateDimBookingDto } from './create-dim-booking.dto';

export class UpdateDimBookingDto extends PartialType(CreateDimBookingDto) {}
