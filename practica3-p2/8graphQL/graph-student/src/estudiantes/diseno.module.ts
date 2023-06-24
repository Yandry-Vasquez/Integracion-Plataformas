import { Module } from '@nestjs/common';
import { DisenoService } from './diseno.service';
import { DisenoResolver } from './diseno.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diseno } from './entities/diseno.entity';

@Module({
  providers: [DisenoResolver, DisenoService],
  imports:[
    TypeOrmModule.forFeature([Diseno])
  ]
})
export class DisenoModule {}
