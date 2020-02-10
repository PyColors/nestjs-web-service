import { Module } from '@nestjs/common';
import { PointcloudsService } from './pointclouds/pointclouds.service';

@Module({
  providers: [PointcloudsService]
})
export class PointcloudsModule {}
