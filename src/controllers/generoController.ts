import { Request, Response } from 'express';
import { GeneroService } from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
 
export default class GeneroController {
    async index(request: Request, response: Response) {
        const service = new GeneroService();

        try {
            const generos = await service.find();
    
            return response.json(generos.map(genero => {
                return {
                    nome: genero.nome.toUpperCase()
                }
            }));
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new GeneroService();

        try {
            const genero = await service.findOne(parseInt(id));
    
            return response.json({
                nome: genero?.nome.toUpperCase()
            });
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async store(request: Request, response: Response) {
        const { nome } = request.body;
        const service = new GeneroService();

        try {
            const genero = await service.create({
                nome: nome
            });

            return response.json(genero);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { nome } = request.body;
        const service = new GeneroService();

        try {
            const genero = await service.update({
                id: parseInt(id),
                nome: nome
            });
            
            return response.json(genero);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new GeneroService();

        try {
            await service.delete(parseInt(id));
    
            return response.sendStatus(204);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }
};