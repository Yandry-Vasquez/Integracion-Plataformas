import { DisenoDTO } from './dto/diseno.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DISENO } from 'src/common/models/models';
import { IDiseno } from 'src/common/interfaces/diseno.interface';

@Injectable()
export class DisenoService {
  constructor(@InjectModel(DISENO.name) private readonly model: Model<IDiseno>) {}

  
  async create(disenoDTO: DisenoDTO): Promise<IDiseno> {
    const newDiseno = new this.model(disenoDTO);
    return await newDiseno.save();
  }

  async findAll(): Promise<IDiseno[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IDiseno> {
    return await this.model.findById(id);
  }

  async update(id: string, disenoDTO: DisenoDTO): Promise<IDiseno> {
    return await this.model.findByIdAndUpdate(id, disenoDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
