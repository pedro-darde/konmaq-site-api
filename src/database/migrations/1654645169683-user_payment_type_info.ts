import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class userPaymentTypeInfo1654645169683 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("TRUNCATE payment_types CASCADE");

    await queryRunner.query(
      "INSERT INTO payment_types (description) VALUES ('Pix'),('Cartão de Crédito'), ('Cartão de Débito'), ('Boleto bancário'), ('Pagar na loja')"
    );

    await queryRunner.createTable(
      new Table({
        name: "user_payment_type_info",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            unsigned: true,
          },
          {
            name: "user_id",
            type: "integer",
            isNullable: false,
            unsigned: true,
          },
          {
            name: "payment_type_id",
            type: "integer",
            isNullable: false,
            unsigned: true,
          },
          {
            name: "info",
            type: "json",
            isNullable: false,
          },
          {
            name: "main",
            type: "boolean",
            default: true,
          },
        ],

        foreignKeys: [
          {
            name: "user_payment_type_info",
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            columnNames: ["user_id"],
          },
          {
            name: "payment_type_fk",
            referencedColumnNames: ["id"],
            referencedTableName: "payment_types",
            columnNames: ["payment_type_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_payment_type_info");
  }
}
