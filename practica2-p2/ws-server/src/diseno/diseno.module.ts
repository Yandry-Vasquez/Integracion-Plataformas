import { Module } from '@nestjs/common';
import { DisenoService } from './diseno.service';
import { DisenoController } from './diseno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diseno } from './entities/diseno.entity';

@Module({
  controllers: [DisenoController],
  providers: [DisenoService],
  imports:[ TypeOrmModule.forFeature([
    Diseno
  ]) ],
  exports:[ DisenoService, TypeOrmModule ]
})
export class DisenoModule {}
