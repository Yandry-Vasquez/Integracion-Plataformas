import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDisenoDto } from './dto/create-diseno.dto';
import { UpdateDisenoDto } from './dto/update-diseno.dto';
import { Diseno } from './entities/diseno.entity';

@Injectable()
export class DisenoService {

  private disenos: Diseno[]=[
    {id:1,   nombre:'Uno', experiencia:'a',aceptacion:'123'},
    {id:2,   nombre:'Dos',experiencia:'b',aceptacion:'456'},
  ]

  create(createDisenoDto: CreateDisenoDto) {
    const diseno = new Diseno();
    diseno.id=  Math.max( ... this.disenos.map(elemento => elemento.id),0 )+1 ;
    diseno.nombre= createDisenoDto.nombre;
    diseno.experiencia= createDisenoDto.experiencia;
    diseno.aceptacion= createDisenoDto.aceptacion;
    
    this.disenos.push(diseno);
    return diseno;
  }

  findAll() : Diseno[] {
    return this.disenos;
  }

  findOne(id: number) {
    const diseno =  this.disenos.find(diseno=> diseno.id===id);
    if (!diseno) throw new NotFoundException(`ID ${id} not found`)
    return diseno;
  }

  update(id: number, updateDisenoDto: UpdateDisenoDto) {
    const { nombre, experiencia, aceptacion   } = updateDisenoDto;
    const diseno = this.findOne(id);
    if (nombre) diseno.nombre= nombre;
    if (experiencia) diseno.experiencia= experiencia;
    if (aceptacion) diseno.aceptacion= aceptacion;
  

    this.disenos =  this.disenos.map( elemento=> {
      if (elemento.id===id) return diseno;
      return elemento;
    } )

    return diseno;

  }

  remove(id: number) {
    this.findOne(id);
    this.disenos =  this.disenos.filter(elemento=> elemento.id!== id);
  }
}
