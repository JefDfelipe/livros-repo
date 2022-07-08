"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../database/connections/Database"));
class MoviesController {
    async index(request, response) {
        const connection = await Database_1.default.getInstance();
        const movies = await connection.query('select * from semana19.filmes order by titulo asc');
        return response.json(movies);
    }
    async show(request, response) {
        const { id } = request.params;
        const connection = await Database_1.default.getInstance();
        const movies = await connection.query(`select * from semana19.filmes where id = ${id}`);
        return response.json(movies.length > 0 ? movies[0] : null);
    }
    store(request, response) {
        return response.send('OK');
    }
    update(request, response) {
        return response.send('UPDATE');
    }
    delete(request, response) {
        return response.send('DELETE');
    }
}
exports.default = MoviesController;
