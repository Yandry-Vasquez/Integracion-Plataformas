"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnicoController = void 0;
const common_1 = require("@nestjs/common");
const tecnico_service_1 = require("./tecnico.service");
const create_tecnico_dto_1 = require("./dto/create-tecnico.dto");
const update_tecnico_dto_1 = require("./dto/update-tecnico.dto");
let TecnicoController = class TecnicoController {
    constructor(tecnicoService) {
        this.tecnicoService = tecnicoService;
    }
    create(createTecnicoDto) {
        return this.tecnicoService.create(createTecnicoDto);
    }
    findAll() {
        return this.tecnicoService.findAll();
    }
    findOne(id) {
        return this.tecnicoService.findOne(id);
    }
    update(id, updateTecnicoDto) {
        return this.tecnicoService.update(+id, updateTecnicoDto);
    }
    remove(id) {
        return this.tecnicoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tecnico_dto_1.CreateTecnicoDto]),
    __metadata("design:returntype", void 0)
], TecnicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], TecnicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TecnicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tecnico_dto_1.UpdateTecnicoDto]),
    __metadata("design:returntype", void 0)
], TecnicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TecnicoController.prototype, "remove", null);
TecnicoController = __decorate([
    (0, common_1.Controller)('tecnico'),
    __metadata("design:paramtypes", [tecnico_service_1.TecnicoService])
], TecnicoController);
exports.TecnicoController = TecnicoController;
//# sourceMappingURL=tecnico.controller.js.map