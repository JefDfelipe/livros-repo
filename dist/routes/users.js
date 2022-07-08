"use strict";
// arquivo com as rotas
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("../controllers/users"));
class UsersRouters {
    init() {
        const router = (0, express_1.Router)();
        const controller = new users_1.default();
        router.get('/users', controller.index);
        router.get('/users/:id', controller.show);
        router.post('/users', controller.store);
        router.put('/users/:id', controller.update);
        router.delete('/users/:id', controller.delete);
        return router;
    }
    ;
}
exports.default = UsersRouters;
;
