import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTableItem1649284409546 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'item',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'quantidade',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'valor_unitario',
                    type: 'money',
                    isNullable: false
                },
                {
                    name: 'venda_id',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'livro_id',
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
                new TableForeignKey({
                    referencedColumnNames: ['id'],
                    referencedTableName: 'venda',
                    columnNames: ['venda_id']
                }),
                new TableForeignKey({
                    referencedColumnNames: ['id'],
                    referencedTableName: 'livro',
                    columnNames: ['livro_id']
                })
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('item', true, true, true);
    }
}
