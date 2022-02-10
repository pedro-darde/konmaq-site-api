import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class OrderTable1643072451046 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "integer",
            isNullable: false,
            unsigned: true,
          },
          {
            name: "payment_id",
            type: "integer",
            isNullable: false,
            unsigned: true,
          },
          { name: "status", type: "integer", default: 0 },
          { name: "search_code", type: "varchar", isNullable: true },
          { name: "invoice_code", type: "varchar", isNullable: true },
          { name: "active", type: "boolean", default: true },
        ],
        foreignKeys: [
          {
            name: "order_user",
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
          },
          {
            name: "order_payment",
            columnNames: ["payment_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "payments",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orders");
  }
}
