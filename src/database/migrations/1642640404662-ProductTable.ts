import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class ProductTable1642640404662 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false,
          },
          { name: "price", type: "float", isNullable: false },
          { name: "promotion", type: "float", isNullable: true },
          { name: "discount", type: "float", isNullable: true },
          { name: "description", type: "varchar", isNullable: false },
          { name: "characteristics", type: "varchar", isNullable: false },
          { name: "deadline", type: "varchar", isNullable: false },
          { name: "keywords", type: "varchar", isNullable: true },
          { name: "alias", type: "varchar", isNullable: true },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "supplier_id",
            type: "integer",
            unsigned: true,
            isNullable: true,
          },
          { name: "weight", type: "float" },
          { name: "length", type: "float" },
          { name: "height", type: "float" },
          { name: "width", type: "float" },
          { name: "active", type: "boolean" },
        ],
        foreignKeys: [
          {
            name: "product_supplier",
            referencedColumnNames: ["id"],
            referencedTableName: "suppliers",
            columnNames: ["supplier_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
