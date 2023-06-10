import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateDisenoDto } from './dto/create-diseno.dto';
import { UpdateDisenoDto } from './dto/update-diseno.dto';
import { Diseno } from './entities/diseno.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DisenoService {

  private readonly logger = new Logger('DisenoService');

  constructor( 
    @InjectRepository(Diseno) 
    private readonly disenoRepository: Repository<Diseno>,

    ){}

  
  async create(createDisenoDto: CreateDisenoDto) {
    try {
      const diseno =  this.disenoRepository.create(createDisenoDto);
      await this.disenoRepository.save(diseno);
      return diseno;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.disenoRepository.find({});
  }

  async findOne(id: string) {
    const diseno= await  this.disenoRepository.findOneBy ({ id });
    if (!diseno)
      throw new NotFoundException(`Diseno ${id} no encontrado`);
    return diseno;

  }

  async update(id: string, updateDisenoDto: UpdateDisenoDto) {
    const diseno = await this.disenoRepository.preload({
      id: id,
      ...updateDisenoDto
    });
    if (!diseno) throw new NotFoundException(`Diseno ${id} no encontrado`)

    try {
      await  this.disenoRepository.save(diseno)
      return diseno;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const diseno = await this.findOne(id);
    await this.disenoRepository.remove(diseno);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
