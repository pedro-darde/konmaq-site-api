import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class removeNotNullDeadline1650479845148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "products",
      "deadline",
      new TableColumn({ name: "deadline", type: "varchar", isNullable: true })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "products",
      "deadline",
      new TableColumn({ name: "deadline", type: "varchar", isNullable: false })
    );
  }
}
