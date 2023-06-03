"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnicoService = void 0;
const common_1 = require("@nestjs/common");
const tecnico_entity_1 = require("./entities/tecnico.entity");
let TecnicoService = class TecnicoService {
    constructor() {
        this.tecnicos = [
            { id: 1, identificacion: '1', nombre: 'Uno', direccion: 'a', telefono: '123', tipo: 1, estado: true },
            { id: 2, identificacion: '2', nombre: 'Dos', direccion: 'b', telefono: '456', tipo: 1, estado: true },
        ];
    }
    create(createTecnicoDto) {
        const tecnico = new tecnico_entity_1.Tecnico();
        tecnico.id = Math.max(...this.tecnicos.map(elemento => elemento.id), 0) + 1;
        tecnico.nombre = createTecnicoDto.nombre;
        tecnico.direccion = createTecnicoDto.direccion;
        tecnico.telefono = createTecnicoDto.telefono;
        tecnico.identificacion = createTecnicoDto.identificacion;
        tecnico.tipo = createTecnicoDto.tipo;
        this.tecnicos.push(tecnico);
        return tecnico;
    }
    findAll() {
        return this.tecnicos;
    }
    findOne(id) {
        const tecnico = this.tecnicos.find(tecnico => tecnico.id === id);
        if (!tecnico)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return tecnico;
    }
    update(id, updateTecnicoDto) {
        const { identificacion, nombre, direccion, telefono, tipo, estado } = updateTecnicoDto;
        const tecnico = this.findOne(id);
        if (nombre)
            tecnico.nombre = nombre;
        if (direccion)
            tecnico.direccion = direccion;
        if (telefono)
            tecnico.telefono = telefono;
        if (estado != undefined)
            tecnico.estado = estado;
        this.tecnicos = this.tecnicos.map(elemento => {
            if (elemento.id === id)
                return tecnico;
            return elemento;
        });
        return tecnico;
    }
    remove(id) {
        this.findOne(id);
        this.tecnicos = this.tecnicos.filter(elemento => elemento.id !== id);
    }
};
TecnicoService = __decorate([
    (0, common_1.Injectable)()
], TecnicoService);
exports.TecnicoService = TecnicoService;
//# sourceMappingURL=tecnico.service.js.map