import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProductOrderTable1643236538391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products_orders",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "quantity", type: "integer", default: 1 },
          {
            name: "product_id",
            type: "integer",
            isNullable: false,
            unsigned: true,
          },
          {
            name: "order_id",
            type: "integer",
            isNullable: false,
            unsigned: true,
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
            name: "orders",
            columnNames: ["order_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "orders",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products_orders");
  }
}
