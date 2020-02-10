import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PointcloudsModule } from './pointclouds/pointclouds.module';

@Module({
  imports: [PointcloudsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
