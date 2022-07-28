import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class userAddressNickname1655471996085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "user_address",
      new TableColumn({
        name: "nickname",
        type: "varchar",
        isNullable: false,
        default: "",
      })
    );
  } 

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("user_address", "nickname");
  }
}
