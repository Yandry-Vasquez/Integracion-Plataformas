import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { Tecnico } from './entities/tecnico.entity';

@Injectable()
export class TecnicoService {

  private tecnicos: Tecnico[]=[
    {id:1, identificacion:'1' , nombre:'Uno', direccion:'a',telefono:'123', tipo:1, estado:true},
    {id:2, identificacion:'2' , nombre:'Dos', direccion:'b',telefono:'456', tipo:1, estado:true},
  ]

  create(createTecnicoDto: CreateTecnicoDto) {
    const tecnico = new Tecnico();
    tecnico.id=  Math.max( ... this.tecnicos.map(elemento => elemento.id),0 )+1 ;
    tecnico.nombre= createTecnicoDto.nombre;
    tecnico.direccion= createTecnicoDto.direccion;
    tecnico.telefono= createTecnicoDto.telefono;
    tecnico.identificacion= createTecnicoDto.identificacion;
    tecnico.tipo= createTecnicoDto.tipo;
    this.tecnicos.push(tecnico);
    return tecnico;
  }

  findAll() : Tecnico[] {
    return this.tecnicos;
  }

  findOne(id: number) {
    const tecnico =  this.tecnicos.find(tecnico=> tecnico.id===id);
    if (!tecnico) throw new NotFoundException(`ID ${id} not found`)
    return tecnico;
  }

  update(id: number, updateTecnicoDto: UpdateTecnicoDto) {
    const { identificacion, nombre, direccion, telefono, tipo, estado   } = updateTecnicoDto;
    const tecnico = this.findOne(id);
    if (nombre) tecnico.nombre= nombre;
    if (direccion) tecnico.direccion= direccion;
    if (telefono) tecnico.telefono= telefono;
    if (estado!= undefined) tecnico.estado= estado;

    this.tecnicos =  this.tecnicos.map( elemento=> {
      if (elemento.id===id) return tecnico;
      return elemento;
    } )

    return tecnico;

  }

  remove(id: number) {
    this.findOne(id);
    this.tecnicos =  this.tecnicos.filter(elemento=> elemento.id!== id);
  }
}
