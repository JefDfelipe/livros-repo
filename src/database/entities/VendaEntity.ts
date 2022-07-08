import { 
    Entity, 
    BaseEntity,
    PrimaryColumn,
    Column,
    OneToMany
 } from 'typeorm';
 import { ItemEntity } from './ItemEntity';

@Entity({ name: 'venda' })
export class VendaEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    cpf: string;

    @Column()
    data: Date;

    @OneToMany(type => ItemEntity, item => item.venda)
    items?: ItemEntity[]

    constructor(cpf: string,
                data: Date) {
        super();
        this.cpf = cpf;
        this.data = data;
    }
}
