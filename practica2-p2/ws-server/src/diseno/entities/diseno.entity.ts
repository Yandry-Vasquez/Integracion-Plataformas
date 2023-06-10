import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Diseno {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column('varchar',{unique:true})
    descripcion:string;

    @Column('varchar',{
        unique:true
    })
    serie:string;

   
}

