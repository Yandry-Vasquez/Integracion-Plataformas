import { PartialType } from '@nestjs/mapped-types';
import { CreateTecnicoDto } from './create-tecnico.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTecnicoDto extends PartialType(CreateTecnicoDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
