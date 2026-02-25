import { Test, TestingModule } from '@nestjs/testing';
import { IotTelemetryController } from './iot-telemetry.controller';
import { IotTelemetryService } from './iot-telemetry.service';

describe('IotTelemetryController', () => {
  let controller: IotTelemetryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IotTelemetryController],
      providers: [IotTelemetryService],
    }).compile();

    controller = module.get<IotTelemetryController>(IotTelemetryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
