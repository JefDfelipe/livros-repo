import { GeneroEntity } from '../entities';
import { GeneroDTO } from '../../dto';

export class GeneroRepository {
    async find() {
        const generos = await GeneroEntity.find();

        return generos;
    }

    async findOne(id: number) {
        const generos = await GeneroEntity.findOne(id);
        
        return generos;
    }

    async create(generoDTO: GeneroDTO) {
        const genero = await new GeneroEntity(generoDTO.nome);
        genero.save();

        return genero;
    }

    async update(generoDTO: GeneroDTO) {
        const genero = await GeneroEntity.findOne(generoDTO.id);

        if (genero) {
            genero.nome = generoDTO.nome;
            await genero.save();
        }

        return genero;
    }

    async delete(generoID: number) {
        await GeneroEntity.delete(generoID);
    }
}