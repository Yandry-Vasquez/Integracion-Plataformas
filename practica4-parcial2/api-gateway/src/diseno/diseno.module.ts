import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { DisenoController } from './diseno.controller';

@Module({
  imports: [ProxyModule],
  controllers: [DisenoController],
})
export class DisenoModule {}
