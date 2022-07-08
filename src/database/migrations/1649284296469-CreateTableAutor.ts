import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableAutor1649284296469 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'autor',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: 'data_nascimento',
                    type: 'date',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('autor', true, true, true);
    }
}
