import { TecnicoService } from './tecnico.service';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnicoDto } from './dto/update-tecnico.dto';
import { Tecnico } from './entities/tecnico.entity';
export declare class TecnicoController {
    private readonly tecnicoService;
    constructor(tecnicoService: TecnicoService);
    create(createTecnicoDto: CreateTecnicoDto): Tecnico;
    findAll(): Tecnico[];
    findOne(id: number): Tecnico;
    update(id: string, updateTecnicoDto: UpdateTecnicoDto): Tecnico;
    remove(id: string): void;
}
