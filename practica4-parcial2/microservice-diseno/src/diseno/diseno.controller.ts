import { DisenoService } from './diseno.service';
import { DisenoDTO } from './dto/diseno.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DisenoMsg } from 'src/common/constants';

@Controller()
export class DisenoController {
  constructor(private readonly disenoService: DisenoService) {}

  @MessagePattern(DisenoMsg.CREATE)
  create(@Payload() disenoDTO: DisenoDTO) {
    return this.disenoService.create(disenoDTO);
  }

  @MessagePattern(DisenoMsg.FIND_ALL)
  findAll() {
    return this.disenoService.findAll();
  }

  @MessagePattern(DisenoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.disenoService.findOne(id);
  }
  @MessagePattern(DisenoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.disenoService.update(payload.id, payload.disenoDTO);
  }

  @MessagePattern(DisenoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.disenoService.delete(id);
  }
}
