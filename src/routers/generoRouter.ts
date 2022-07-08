import { Router } from 'express';
import GeneroController from '../controllers/generoController';
import { generoValidateMiddleware } from '../middlewares';
import { HttpRouter } from '../contracts';

export class GeneroRoutes implements HttpRouter {
    init() {
        const routes = Router();
        const controller = new GeneroController();

        routes.get('/genero', controller.index);
        routes.get('/genero/:id', controller.show);
        routes.post('/genero', [generoValidateMiddleware], controller.store);
        routes.put('/genero/:id', [generoValidateMiddleware], controller.update);
        routes.delete('/genero/:id', controller.delete);

        return routes;
    };
};