import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class WarningTable1643072176562 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "warnings",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "title", type: "varchar", isNullable: false },
          { name: "description", type: "varchar", isNullable: false },
          { name: "active", type: "boolean", isNullable: true },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("warnings");
  }
}
