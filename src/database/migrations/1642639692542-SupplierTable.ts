import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class SupplierTable1642639692542 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "suppliers",
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
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "phone_number",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "neighboor",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "country",
            type: "integer",
            isNullable: false,
          },
          {
            name: "city",
            type: "integer",
            isNullable: false,
          },
          {
            name: "city_name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "street_name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "street_number",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "additional",
            type: "varchar",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("suppliers");
  }
}
