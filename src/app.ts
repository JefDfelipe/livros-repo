import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import cors from 'cors';
//método I.O. não precisa de imports assim:
// import GeneroRoutes from './routers/generoRouter';
// import LivroRoutes from './routers/livroRouter';
import Database from './database/connections/Database';
import { logMiddleware } from './middlewares';
import { HttpError } from './errors';
import path from 'path';
import fs from 'fs';

export default class Application {
    readonly #express: express.Application;

    constructor() {
        this.#express = express();
    }

    async init() {        
        this.config();
        this.middlewares();
        this.routers();
        this.errors();
        await this.database();
    }

    start(port: number) {
        this.#express.listen(port, () => {
            console.log(`A aplicação está rodando na porta ${port}...`); 
        });
    }

    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(cors());
    }

    private middlewares() {
        this.#express.use(logMiddleware);
    }

    private errors() {
        this.#express.use((error: HttpError, request: Request, response: Response, next: NextFunction) => {
            return response.status(error.status).json({
                mensagem: error.message
            });
        });
    }

    private routers() {
        // const generoRouter = new GeneroRoutes().init();
        // this.#express.use(generoRouter);

        // const livroRouter = new LivroRoutes().init();
        // this.#express.use(livroRouter);

        //D.I. = injeção de dependência

        //ioc = inversão de dependência
        // pattern builder, factory


        //método I.O. para buscar routers
        //ToDo: refatorar para buscar aoenas arquivos que implementam Router
        const routersPath = path.resolve(__dirname, 'routers');//cada parâmetro é um nível de diretório

        fs.readdirSync(routersPath).forEach(filename => {
            import (path.resolve(routersPath, filename)).then(file=>{
                const instance = new file.default();
                this.#express.use(instance.init());
            });
        });
    };

    private async database() {
        await Database.getInstance();
    }
};