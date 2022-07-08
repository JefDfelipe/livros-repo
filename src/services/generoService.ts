import { GeneroRepository } from '../database/repositories';
import { GeneroDTO } from '../dto';

export class GeneroService {
    async find() {
        const repository = new GeneroRepository();
        const genero = await repository.find();

        return genero;
    };

    async findOne(id: number) {
        const repository = new GeneroRepository();
        const genero = await repository.findOne(id);

        return genero;
    };

    async create(generoDTO: GeneroDTO) {
        const repository = new GeneroRepository();
        const genero = await repository.create(generoDTO);

        return genero;
    };

    async update(generoDTO: GeneroDTO) {
        const repository = new GeneroRepository();
        const genero = await repository.update(generoDTO);

        return genero;
    };

    async delete(generoID: number) {
        const repository = new GeneroRepository();
        await repository.delete(generoID);
    };
};