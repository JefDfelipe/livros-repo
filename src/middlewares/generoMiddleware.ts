import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors';
import { HttpBadRequestCode, invalidField } from '../constants';

export const generoValidateMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const { nome } = request.body;

    if (nome.length < 3 || nome.length > 255) {
        throw new HttpError(invalidField('Nome'), HttpBadRequestCode);
    };
    
    next();
};