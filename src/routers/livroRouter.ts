import { Router } from 'express';
import LivroController from '../controllers/livroController';
import { livroValidateMiddleware } from '../middlewares';
import { HttpRouter } from '../contracts';

export class LivroRoutes implements HttpRouter {
    init() {
        const routes = Router();
        const controller = new LivroController();

        routes.get('/livro', controller.index);
        routes.get('/livro/:id', controller.show);
        routes.post('/livro', [livroValidateMiddleware], controller.store);
        routes.put('/livro/:id', [livroValidateMiddleware], controller.update);
        routes.delete('/livro/:id', controller.delete);

        return routes;
    }
}