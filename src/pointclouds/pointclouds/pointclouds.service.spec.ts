import { Test, TestingModule } from '@nestjs/testing';
import { PointcloudsService } from './pointclouds.service';

describe('PointcloudsService', () => {
  let service: PointcloudsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointcloudsService],
    }).compile();

    service = module.get<PointcloudsService>(PointcloudsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
