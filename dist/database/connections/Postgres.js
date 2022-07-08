"use strict";
// singleton (padrão de projeto)
Object.defineProperty(exports, "__esModule", { value: true });
// poll de conexões
const typeorm_1 = require("typeorm");
class Database {
    getConnection() {
        if (Database.connection === null || Database.connection === undefined) {
            throw new Error('Conexão com o banco não foi aberta');
        }
        return Database.connection;
    }
    async openConnection() {
        if (Database.connection === null || Database.connection === undefined) {
            try {
                Database.connection = await (0, typeorm_1.createConnection)();
            }
            catch (error) {
                throw new Error(`Erro ao conectar no banco, ${error}`);
            }
        }
    }
}
exports.default = Database;
