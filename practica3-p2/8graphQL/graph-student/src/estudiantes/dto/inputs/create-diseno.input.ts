import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateDisenoInput {

  @Field(()=>String )
  @IsNotEmpty()
  descripcion:string;



  
}
