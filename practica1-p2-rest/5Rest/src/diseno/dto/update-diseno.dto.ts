import { PartialType } from '@nestjs/mapped-types';
import { CreateDisenoDto } from './create-diseno.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateDisenoDto extends PartialType(CreateDisenoDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
