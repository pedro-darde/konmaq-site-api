import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class changeActiveColumnOnProduct1644515712710 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('products', 'active', new TableColumn({ name: 'active', type: 'boolean', default: true, isNullable: true }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
