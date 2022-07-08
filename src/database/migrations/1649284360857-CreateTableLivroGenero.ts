import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTableLivroGenero1649284360857 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'livro_genero',
            columns: [
                {
                    name: 'livro_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'genero_id',
                    type: 'int',
                    isPrimary: true,
                    isNullable: false
                }
            ],
            foreignKeys: [
                new TableForeignKey({
                    referencedColumnNames: ['id'],
                    referencedTableName: 'livro',
                    columnNames: ['livro_id']
                }),
                new TableForeignKey({
                    referencedColumnNames: ['id'],
                    referencedTableName: 'genero',
                    columnNames: ['genero_id']
                })
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('livro_genero', true, true, true);
    }
}
