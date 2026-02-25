import { Test, TestingModule } from '@nestjs/testing';
import { IotTelemetryService } from './iot-telemetry.service';

describe('IotTelemetryService', () => {
  let service: IotTelemetryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IotTelemetryService],
    }).compile();

    service = module.get<IotTelemetryService>(IotTelemetryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
