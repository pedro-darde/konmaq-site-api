import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CategoryTable1642981931025 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "parent_id",
            type: "integer",
            isNullable: true,
            unsigned: true,
          },
          {
            name: "active",
            type: "boolean",
            default: true,
          },
        ],
        foreignKeys: [
          {
            name: "parent_category_id",
            columnNames: ["parent_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }
}
