import { PartialType } from '@nestjs/mapped-types';
import { CreateFactBookingStatusDto } from './create-fact-booking-status.dto';

export class UpdateFactBookingStatusDto extends PartialType(CreateFactBookingStatusDto) {}
