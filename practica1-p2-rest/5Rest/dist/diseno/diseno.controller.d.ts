import { DisenoService } from './diseno.service';
import { CreateDisenoDto } from './dto/create-diseno.dto';
import { UpdateDisenoDto } from './dto/update-diseno.dto';
import { Diseno } from './entities/diseno.entity';
export declare class DisenoController {
    private readonly disenoService;
    constructor(disenoService: DisenoService);
    create(createDisenoDto: CreateDisenoDto): Diseno;
    findAll(): Diseno[];
    findOne(id: number): Diseno;
    update(id: string, updateDisenoDto: UpdateDisenoDto): Diseno;
    remove(id: string): void;
}
