import { MigrationInterface, QueryRunner } from "typeorm";

export class removeUserAddressInfo1654219747524 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("users", [
      "neighboor",
      "country",
      "city",
      "city_name",
      "street_name",
      "street_number",
      "additional",
      "cep",
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
