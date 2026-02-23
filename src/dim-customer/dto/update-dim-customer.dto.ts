import { PartialType } from '@nestjs/mapped-types';
import { CreateDimCustomerDto } from './create-dim-customer.dto';

export class UpdateDimCustomerDto extends PartialType(CreateDimCustomerDto) {}
