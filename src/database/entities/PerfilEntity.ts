import { 
    Entity, 
    BaseEntity,
    PrimaryColumn,
    Column,
    OneToOne,
    JoinColumn
 } from 'typeorm';
 import { AutorEntity } from './AutorEntity';

@Entity({ name: 'perfil' })
export class PerfilEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column({ name: 'autor_id' })
    autorId: number;

    @OneToOne(type => AutorEntity, autor => autor.perfil)
    @JoinColumn({ name: 'autor_id', referencedColumnName: 'id' })
    autor?: AutorEntity;

    constructor(autorId: number) {
        super();
        this.autorId = autorId;
    }
}
