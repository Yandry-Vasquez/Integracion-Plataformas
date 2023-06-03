import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { Tecnico } from './entities/tecnico.entity';
export declare class TecnicoService {
    private tecnicos;
    create(createTecnicoDto: CreateTecnicoDto): Tecnico;
    findAll(): Tecnico[];
    findOne(id: number): Tecnico;
    update(id: number, updateTecnicoDto: UpdateTecnicoDto): Tecnico;
    remove(id: number): void;
}
