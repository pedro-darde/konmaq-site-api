import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addUserNeighboor1645053791671 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({ name: "neighboor", type: "varchar", isNullable: true })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
