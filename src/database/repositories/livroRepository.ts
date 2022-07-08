import { LivroEntity, GeneroEntity } from '../entities';
import { LivroDTO } from '../../dto';

export class LivroRepository {
    async find() {
        const livros = await LivroEntity.find();

        return livros;
    }

    async findOne(id: number) {
        const livros = await LivroEntity.findOne(id);
        
        return livros;
    }

    async create(livroDTO: LivroDTO) {
        const livro = new LivroEntity(livroDTO.descricao, livroDTO.valor, livroDTO.autorId);
        livro.save();

        return livro;
    }

    async update(livroDTO: LivroDTO) {
        const livro = await LivroEntity.findOne(livroDTO.id);

        if (livro) {
            livro.descricao = livroDTO.descricao;
            livro.valor = livroDTO.valor;
            await livro.save();
        }

        return livro;
    }

    async delete(livroID: number) {
        await LivroEntity.delete(livroID);
    }
}