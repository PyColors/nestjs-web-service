import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pointcloud } from './../pointcloud.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PointcloudsService {
  constructor(
    @InjectRepository(Pointcloud)
    private pointcloudRepository: Repository<Pointcloud>,
  ) {}
  async findAll(): Promise<Pointcloud[]> {
    return await this.pointcloudRepository.find();
  }

  async create(pointcloud: Pointcloud): Promise<Pointcloud> {
    return await this.pointcloudRepository.save(pointcloud);
  }

  async update(pointcloud: Pointcloud): Promise<UpdateResult> {
    return await this.pointcloudRepository.update(pointcloud.id, pointcloud);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.pointcloudRepository.delete(id);
  }
}
