"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnicoModule = void 0;
const common_1 = require("@nestjs/common");
const tecnico_service_1 = require("./tecnico.service");
const tecnico_controller_1 = require("./tecnico.controller");
let TecnicoModule = class TecnicoModule {
};
TecnicoModule = __decorate([
    (0, common_1.Module)({
        controllers: [tecnico_controller_1.TecnicoController],
        providers: [tecnico_service_1.TecnicoService]
    })
], TecnicoModule);
exports.TecnicoModule = TecnicoModule;
//# sourceMappingURL=tecnico.module.js.map