import { CreateTecnicoDto } from './create-tecnico.dto';
declare const UpdateTecnicoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTecnicoDto>>;
export declare class UpdateTecnicoDto extends UpdateTecnicoDto_base {
    estado?: boolean;
}
export {};
