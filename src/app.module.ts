import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApinftModule } from './apinft/apinft.module';

@Module({
  imports: [ApinftModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
