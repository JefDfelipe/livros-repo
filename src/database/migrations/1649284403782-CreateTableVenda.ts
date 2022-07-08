import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableVenda1649284403782 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'venda',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'data',
                    type: 'date',
                    isNullable: false
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    length: '11',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('venda', true, true , true);
    }
}
