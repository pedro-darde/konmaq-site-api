import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PaymentTypeTable1643070577572 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "payment_types",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "description", type: "varchar", isNullable: false },
          { name: "active", type: "boolean", default: true },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("payment_types");
  }
}
