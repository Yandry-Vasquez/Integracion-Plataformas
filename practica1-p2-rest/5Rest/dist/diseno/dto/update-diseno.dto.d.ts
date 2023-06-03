import { CreateDisenoDto } from './create-diseno.dto';
declare const UpdateDisenoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDisenoDto>>;
export declare class UpdateDisenoDto extends UpdateDisenoDto_base {
    estado?: boolean;
}
export {};
