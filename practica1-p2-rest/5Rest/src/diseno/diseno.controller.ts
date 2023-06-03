import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DisenoService } from './diseno.service';
import { CreateDisenoDto } from './dto/create-diseno.dto';
import { UpdateDisenoDto } from './dto/update-diseno.dto';
import { Diseno } from './entities/diseno.entity';

@Controller('diseno')
export class DisenoController {
  constructor(private readonly disenoService: DisenoService) {}

  @Post()
  create(@Body() createDisenoDto: CreateDisenoDto) {
    return this.disenoService.create(createDisenoDto);
  }

  @Get()
  findAll() : Diseno[] {
    return this.disenoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.disenoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisenoDto: UpdateDisenoDto) {
    return this.disenoService.update(+id, updateDisenoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disenoService.remove(+id);
  }
}
