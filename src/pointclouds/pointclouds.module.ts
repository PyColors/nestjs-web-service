import { Module } from '@nestjs/common';
import { PointcloudsService } from './pointclouds/pointclouds.service';
import { PointcloudsController } from './pointclouds/pointclouds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pointcloud } from './pointcloud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pointcloud])],
  providers: [PointcloudsService],
  controllers: [PointcloudsController],
})
export class PointcloudsModule {}
