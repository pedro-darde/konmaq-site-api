import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveCaracteristicsColumn1644515545262 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products', 'characteristics')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
