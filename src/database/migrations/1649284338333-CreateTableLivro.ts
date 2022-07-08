import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
export class CreateTableLivro1649284338333 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'livro',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'descricao',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'valor',
                    type: 'money',
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
                    columnNames: ['autor_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'autor'
                })
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('livro', true, true, true);
    }
}
