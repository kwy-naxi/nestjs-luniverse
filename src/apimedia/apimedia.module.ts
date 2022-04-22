import { Module } from '@nestjs/common';
import { ApimediaService } from './apimedia.service';
import { ApimediaController } from './apimedia.controller';

@Module({
  controllers: [ApimediaController],
  providers: [ApimediaService]
})
export class ApimediaModule {}
