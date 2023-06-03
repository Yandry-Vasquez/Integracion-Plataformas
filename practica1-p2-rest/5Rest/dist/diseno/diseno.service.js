"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisenoService = void 0;
const common_1 = require("@nestjs/common");
const diseno_entity_1 = require("./entities/diseno.entity");
let DisenoService = class DisenoService {
    constructor() {
        this.disenos = [
            { id: 1, nombre: 'Uno', experiencia: 'a', aceptacion: '123' },
            { id: 2, nombre: 'Dos', experiencia: 'b', aceptacion: '456' },
        ];
    }
    create(createDisenoDto) {
        const diseno = new diseno_entity_1.Diseno();
        diseno.id = Math.max(...this.disenos.map(elemento => elemento.id), 0) + 1;
        diseno.nombre = createDisenoDto.nombre;
        diseno.experiencia = createDisenoDto.experiencia;
        diseno.aceptacion = createDisenoDto.aceptacion;
        this.disenos.push(diseno);
        return diseno;
    }
    findAll() {
        return this.disenos;
    }
    findOne(id) {
        const diseno = this.disenos.find(diseno => diseno.id === id);
        if (!diseno)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return diseno;
    }
    update(id, updateDisenoDto) {
        const { nombre, experiencia, aceptacion } = updateDisenoDto;
        const diseno = this.findOne(id);
        if (nombre)
            diseno.nombre = nombre;
        if (experiencia)
            diseno.experiencia = experiencia;
        if (aceptacion)
            diseno.aceptacion = aceptacion;
        this.disenos = this.disenos.map(elemento => {
            if (elemento.id === id)
                return diseno;
            return elemento;
        });
        return diseno;
    }
    remove(id) {
        this.findOne(id);
        this.disenos = this.disenos.filter(elemento => elemento.id !== id);
    }
};
DisenoService = __decorate([
    (0, common_1.Injectable)()
], DisenoService);
exports.DisenoService = DisenoService;
//# sourceMappingURL=diseno.service.js.map