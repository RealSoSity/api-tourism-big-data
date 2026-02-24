import { Injectable } from '@nestjs/common';
import { CreateDimBookingDto } from './dto/create-dim-booking.dto';
import { UpdateDimBookingDto } from './dto/update-dim-booking.dto';

@Injectable()
export class DimBookingService {
  create(createDimBookingDto: CreateDimBookingDto) {
    return 'This action adds a new dimBooking';
  }

  findAll() {
    return `This action returns all dimBooking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dimBooking`;
  }

  update(id: number, updateDimBookingDto: UpdateDimBookingDto) {
    return `This action updates a #${id} dimBooking`;
  }

  remove(id: number) {
    return `This action removes a #${id} dimBooking`;
  }
}
