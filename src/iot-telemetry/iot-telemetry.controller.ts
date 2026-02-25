import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseArrayPipe,
} from '@nestjs/common';
import { IotTelemetryService } from './iot-telemetry.service';
import { CreateIotTelemetryDto } from './dto/create-iot-telemetry.dto';
import { UpdateIotTelemetryDto } from './dto/update-iot-telemetry.dto';

@Controller('iot-telemetry')
export class IotTelemetryController {
  constructor(private readonly iotTelemetryService: IotTelemetryService) {}

  @Post()
  create(@Body() createIotTelemetryDto: CreateIotTelemetryDto) {
    return this.iotTelemetryService.create(createIotTelemetryDto);
  }

  @Post('bulk')
  createBulk(
    @Body(
      new ParseArrayPipe({
        items: CreateIotTelemetryDto,
        whitelist: true,
        forbidNonWhitelisted: false,
      }),
    )
    dtos: CreateIotTelemetryDto[],
  ) {
    return this.iotTelemetryService.createBulk(dtos);
  }

  @Get()
  findAll() {
    return this.iotTelemetryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iotTelemetryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIotTelemetryDto: UpdateIotTelemetryDto,
  ) {
    return this.iotTelemetryService.update(+id, updateIotTelemetryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iotTelemetryService.remove(+id);
  }
}
