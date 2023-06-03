import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDisenoDto {
    @IsString()
    @IsNotEmpty()
    id:number;

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    experiencia:string;
    

    @IsString()
    @IsNotEmpty()
    aceptacion:string;
}
