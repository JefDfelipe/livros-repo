import { 
    Entity, 
    BaseEntity,
    PrimaryColumn,
    Column,
    OneToOne,
    OneToMany
 } from 'typeorm';
 import { LivroEntity } from './LivroEntity';
 import { PerfilEntity } from './PerfilEntity';

@Entity({ name: 'autor' })
export class AutorEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    nome: string;

    @Column({ name: 'data_nascimento' })
    dataNascimento: Date;

    @OneToOne(type => PerfilEntity, perfil => perfil.autor)
    perfil?: PerfilEntity;

    @OneToMany(type => LivroEntity, livro => livro.autor)
    livros?: LivroEntity[];

    constructor(nome: string, dataNascimento: Date) {
        super();
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }
}
