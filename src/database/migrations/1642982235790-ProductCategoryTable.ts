import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProductCategoryTable1642982235790 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products_categories",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "product_id",
            type: "integer",
            unsigned: true,
            isNullable: false,
          },
          {
            name: "category_id",
            type: "integer",
            unsigned: true,
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: "products",
            columnNames: ["product_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
          },
          {
            name: "categories",
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products_categories");
  }
}
