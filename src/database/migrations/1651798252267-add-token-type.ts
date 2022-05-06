import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addTokenType1651798252267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('users', [
            new TableColumn({
                type: 'varchar',
                isNullable: true,
                name: 'token'
            }),
            new TableColumn({
                type: 'varchar',
                default: 'user',
                name: 'type'
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
