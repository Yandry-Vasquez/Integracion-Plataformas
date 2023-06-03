import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DisenoModule } from './diseno/diseno.module';

@Module({
  imports: [DisenoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
