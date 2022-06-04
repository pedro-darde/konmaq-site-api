import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class userAdressForeign1654219997088 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "user_address",
      new TableColumn({
        name: "user_id",
        type: "integer",
        isNullable: false,
        unsigned: true,
      })
    );

    await queryRunner.createForeignKey(
      "user_address",
      new TableForeignKey({
        name: "user_fk",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
