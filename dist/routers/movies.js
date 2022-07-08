"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movies_1 = __importDefault(require("../controllers/movies"));
class MoviesRoutes {
    init() {
        const router = (0, express_1.Router)();
        const controller = new movies_1.default();
        router.get('/movies', controller.index);
        router.get('/movies/:id', controller.show);
        router.post('/movies', controller.store);
        router.put('/movies/:id', controller.update);
        router.delete('/movies/:id', controller.delete);
        return router;
    }
}
exports.default = MoviesRoutes;
