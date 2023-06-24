import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'diseno'})
@ObjectType()
export class Diseno {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    descripcion:string;


}
