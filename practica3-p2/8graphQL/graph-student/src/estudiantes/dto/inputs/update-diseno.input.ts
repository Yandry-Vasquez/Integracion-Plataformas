import { IsUUID } from 'class-validator';
import { CreateDisenoInput } from './create-diseno.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateDisenoInput extends PartialType(CreateDisenoInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
