import {
    Entity,
    BaseEntity,
    PrimaryColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
    ManyToMany,
    JoinTable
} from 'typeorm';
import { AutorEntity } from './AutorEntity';
import { GeneroEntity } from './GeneroEntity';
import { ItemEntity } from './ItemEntity';

@Entity({ name: 'livro' })
export class LivroEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    descricao: string;

    @Column()
    valor: number;

    @Column({ name: 'autor_id' })
    autorId: number;

    @ManyToOne(type => AutorEntity, autor => autor.livros)
    @JoinColumn({ name: 'autor_id', referencedColumnName: 'id' })
    autor?: AutorEntity;

    @OneToMany(type => ItemEntity, item => item.livro)
    items?: ItemEntity[];

    @ManyToMany(type => GeneroEntity, genero => genero.livros)
    @JoinTable({
        name: 'livro_genero',
        joinColumn: {
            name: 'livro_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'genero_id',
            referencedColumnName: 'id'
        }
    })
    generos?: GeneroEntity[];

    constructor(
        descricao: string,
        valor: number,
        autorId: number) {
        super();
        this.descricao = descricao;
        this.valor = valor;
        this.autorId = autorId;
    }
}
