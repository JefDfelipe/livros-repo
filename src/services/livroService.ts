import {LivroRepository } from '../database/repositories';
import { LivroDTO } from '../dto';

export class LivroService {
    async find() {
        const repository = new LivroRepository();
        const livro = await repository.find();

        return livro;
    }

    async findOne(id: number) {
        const repository = new LivroRepository();
        const livro = await repository.findOne(id);

        return livro;
    }

    async create(livroDTO: LivroDTO) {
        const repository = new LivroRepository();
        const livro = await repository.create(livroDTO);

        return livro;
    }

    async update(livroDTO: LivroDTO) {
        const repository = new LivroRepository();
        const livro = await repository.update(livroDTO);

        return livro;
    }

    async delete(livroID: number) {
        const repository = new LivroRepository();
        await repository.delete(livroID);
    }
}