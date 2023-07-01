import { Module } from '@nestjs/common';
import { DisenoService } from './diseno.service';
import { DisenoSchema } from './schema/diseno.schema';
import { DISENO } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { DisenoController } from './diseno.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: DISENO.name,
        useFactory: () => DisenoSchema,
      },
    ]),
  ],
  controllers: [DisenoController],
  providers: [DisenoService],
})
export class DisenoModule {}
