import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserTable1643066964123 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name_social_name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "document",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "insc_estadual",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "isento",
            type: "boolean",
            default: false,
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "phone_number",
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
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "active",
            type: "boolean",
            default: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
