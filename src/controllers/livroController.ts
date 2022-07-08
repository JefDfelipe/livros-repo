import { Request, Response } from 'express';
import { LivroService, GeneroService } from '../services';
import { LivroDTO } from '../dto';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';

export default class LivroController {
    async index(request: Request, response: Response) {
        const service = new LivroService();

        try {
            const livros = await service.find();

            return response.json(livros);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new LivroService();

        try {
            const livro = await service.findOne(parseInt(id));

            return response.json(livro);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async store(request: Request, response: Response) {
        const { descricao, valor, autorId, generos } = request.body;
        const livroService = new LivroService();
        const generoService = new GeneroService();
        const dto: LivroDTO = {
            descricao,
            valor,
            autorId,
            generos: []
        };

        try {
            generos.forEach(async (genero: number) => {
                const resultQuery = await generoService.findOne(genero);

                if (resultQuery && resultQuery.id) {
                    dto.generos?.push(resultQuery.id);
                }
            });

            const livro = await livroService.create(dto);

            return response.json(livro);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { descricao, valor, autorId } = request.body;
        const livroService = new LivroService();

        try {
            const livro = await livroService.update({
                id: parseInt(id),
                descricao,
                valor,
                autorId
            });

            return response.json(livro);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        };
    };

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const livroService = new LivroService();

        try {
            await livroService.delete(parseInt(id));

            return response.sendStatus(204);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }
};