"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisenoModule = void 0;
const common_1 = require("@nestjs/common");
const diseno_service_1 = require("./diseno.service");
const diseno_controller_1 = require("./diseno.controller");
let DisenoModule = class DisenoModule {
};
DisenoModule = __decorate([
    (0, common_1.Module)({
        controllers: [diseno_controller_1.DisenoController],
        providers: [diseno_service_1.DisenoService]
    })
], DisenoModule);
exports.DisenoModule = DisenoModule;
//# sourceMappingURL=diseno.module.js.map