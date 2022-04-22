import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApinftModule } from './apinft/apinft.module';
import { ApimediaModule } from './apimedia/apimedia.module';

@Module({
  imports: [ApinftModule, ApimediaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
