import { 
    Entity, 
    BaseEntity,
    PrimaryColumn,
    Column,
    ManyToOne,
    JoinColumn
 } from 'typeorm';
 import { VendaEntity } from './VendaEntity';
 import { LivroEntity } from './LivroEntity';

@Entity({ name: 'item' })
export class ItemEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column({ name: 'venda_id' })
    vendaId: number;

    @Column({ name: 'livro_id' })
    livroId: number;

    @Column()
    quantidade: number;

    @Column({ name: 'valor_unitario' })
    valorUnitario: number

    @ManyToOne(type => VendaEntity, venda => venda.items)
    @JoinColumn({ name: 'venda_id', referencedColumnName: 'id' })
    venda?: VendaEntity;

    @ManyToOne(type => LivroEntity, livro => livro.items)
    @JoinColumn({ name: 'livro_id', referencedColumnName: 'id' })
    livro?: LivroEntity;

    constructor(vendaId: number,
                livroId: number,
                quantidade: number,
                valorUnitario: number) {
        super();
        this.vendaId = vendaId;
        this.livroId = livroId;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }
}
