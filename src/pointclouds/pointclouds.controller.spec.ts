import { Test, TestingModule } from '@nestjs/testing';
import { PointcloudsController } from './pointclouds.controller';

describe('Pointclouds Controller', () => {
  let controller: PointcloudsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointcloudsController],
    }).compile();

    controller = module.get<PointcloudsController>(PointcloudsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
