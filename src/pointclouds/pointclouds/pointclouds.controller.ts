import { Pointcloud } from './../pointcloud.entity';
import { PointcloudsService } from './pointclouds.service';

import { Controller, Get } from '@nestjs/common';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('pointclouds')
export class PointcloudsController {
  constructor(private pointcloudsService: PointcloudsService) {}
  @Get()
  index(): Promise<Pointcloud[]> {
    return this.pointcloudsService.findAll();
  }

  // POST endpoint for creating a new pointcloud
  @Post('create')
  async create(@Body() pointcloudData: Pointcloud): Promise<any> {
    return this.pointcloudsService.create(pointcloudData);
  }

  @Put(':id/update')
  async update(
    @Param('id') id,
    @Body() pointcloudData: Pointcloud,
  ): Promise<any> {
    pointcloudData.id = Number(id);
    console.log('Update #' + pointcloudData.id);
    return this.pointcloudsService.update(pointcloudData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.pointcloudsService.delete(id);
  }
}
