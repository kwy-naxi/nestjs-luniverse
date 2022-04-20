import { Module } from '@nestjs/common';
import { ApinftController } from './apinft.controller';
import { ApinftService } from './apinft.service';

@Module({
  controllers: [ApinftController],
  providers: [ApinftService]
})
export class ApinftModule {}
