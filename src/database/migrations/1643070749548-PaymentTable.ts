import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PaymentTable1643070749548 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "payments",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "user_id", type: "integer", isNullable: false },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "due_date",
            type: "timestamp",
            default: null,
            isNullable: true,
          },
          {
            name: "payment_type_id",
            type: "integer",
            isNullable: false,
            unsigned: true,
          },
          { name: "transport", type: "varchar", isNullable: false },
          { name: "active", type: "boolean", default: true },
        ],
        foreignKeys: [
          {
            name: "payment_user",
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
          },
          {
            name: "payment_type",
            columnNames: ["payment_type_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "payment_types",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("payments");
  }
}
