import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class userPrimaryAddress1654220778409 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "user_address",
      new TableColumn({
        name: "main",
        type: "boolean",
        default: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
