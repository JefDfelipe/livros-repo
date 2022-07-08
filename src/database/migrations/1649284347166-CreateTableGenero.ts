import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableGenero1649284347166 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'genero',
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
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('genero', true, true, true);
    }
}
