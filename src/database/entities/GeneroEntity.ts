import { Entity, BaseEntity, PrimaryColumn, Column, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { LivroEntity } from './LivroEntity';

@Entity({ name: 'genero' })
export class GeneroEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    nome: string;

    @ManyToMany(type => LivroEntity, livro => livro.generos)
    @JoinTable({
        name: 'livro_genero',
        joinColumn: {
            name: 'genero_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'livro_id',
            referencedColumnName: 'id'
        }
    })
    livros?: LivroEntity[];

    constructor(nome: string) {
        super();
        this.nome = nome;
    }
}
