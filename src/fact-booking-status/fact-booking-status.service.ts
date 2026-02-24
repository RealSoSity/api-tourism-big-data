import { Injectable } from '@nestjs/common';
import { CreateFactBookingStatusDto } from './dto/create-fact-booking-status.dto';
import { UpdateFactBookingStatusDto } from './dto/update-fact-booking-status.dto';

@Injectable()
export class FactBookingStatusService {
  create(createFactBookingStatusDto: CreateFactBookingStatusDto) {
    return 'This action adds a new factBookingStatus';
  }

  findAll() {
    return `This action returns all factBookingStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factBookingStatus`;
  }

  update(id: number, updateFactBookingStatusDto: UpdateFactBookingStatusDto) {
    return `This action updates a #${id} factBookingStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} factBookingStatus`;
  }
}
