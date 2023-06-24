import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDisenoInput, UpdateDisenoInput } from './dto/inputs';
import { Diseno } from './entities/diseno.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DisenoService {

  constructor( 
    @InjectRepository(Diseno)
    private readonly disenoRepository:Repository<Diseno> ){}

  async create(createDisenoInput: CreateDisenoInput): Promise<Diseno>  {
    const newDiseno= this.disenoRepository.create(createDisenoInput);
    return await this.disenoRepository.save(newDiseno); 
  }

  async findAll(): Promise<Diseno[]> {
    return this.disenoRepository.find();
  }

  async findOne(id: string): Promise<Diseno> {
     const diseno= await  this.disenoRepository.findOneBy({id});
     if (!diseno) throw new NotFoundException(`Not found`)
     return diseno;
  }

  async update(id: string, updateDisenoInput: UpdateDisenoInput): Promise<Diseno> {
    
    const diseno = await this.disenoRepository.preload(updateDisenoInput);
    if (!diseno) throw new NotFoundException(`Not found`)
    return this.disenoRepository.save(diseno);

  }

  async remove(id: string): Promise<Diseno> {

    const diseno= await  this.findOne(id);

    await this.disenoRepository.remove(diseno);

    return {...diseno, id};

  }
}
