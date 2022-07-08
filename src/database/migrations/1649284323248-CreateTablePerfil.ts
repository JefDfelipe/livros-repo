import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTablePerfil1649284323248 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'perfil',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'autor_id',
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
                new TableForeignKey({
                    referencedTableName: 'autor',
                    referencedColumnNames: ['id'],
                    columnNames: ['autor_id']
                })
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('perfil', true, true, true);
    }
}
