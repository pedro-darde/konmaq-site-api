import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProductFilesTable1643072824255 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products_files",
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
          { name: "path", type: "varchar", isNullable: false },
          { name: "filename", type: "varchar", isNullable: false },
          { name: "active", type: "boolean", default: true },
          {
            name: "created_at",
            type: "TIMESTAMP",
            default: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            name: "file_product",
            columnNames: ["product_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products_files')
  }
}
