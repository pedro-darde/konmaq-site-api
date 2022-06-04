import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUserAddressTable1654219437928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_address",
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
          {
            name: "cep",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_address");
  }
}
