import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors';
import { HttpBadRequestCode, invalidField } from '../constants';

export const livroValidateMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const { genero } = request.body;

    if (genero.length < 3 || genero.length > 255) {
        throw new HttpError(invalidField('Genero'), HttpBadRequestCode);
    };
    
    next();
};