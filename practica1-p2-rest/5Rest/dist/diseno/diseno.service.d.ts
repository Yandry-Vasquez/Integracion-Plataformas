import { CreateDisenoDto } from './dto/create-diseno.dto';
import { UpdateDisenoDto } from './dto/update-diseno.dto';
import { Diseno } from './entities/diseno.entity';
export declare class DisenoService {
    private disenos;
    create(createDisenoDto: CreateDisenoDto): Diseno;
    findAll(): Diseno[];
    findOne(id: number): Diseno;
    update(id: number, updateDisenoDto: UpdateDisenoDto): Diseno;
    remove(id: number): void;
}
