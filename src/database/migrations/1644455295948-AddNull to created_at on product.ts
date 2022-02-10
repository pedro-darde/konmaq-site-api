import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddNullToCreatedAtOnProduct1644455295948
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "products",
      "created_at",
      new TableColumn({
        name: "created_at",
        type: "TIMESTAMP",
        isNullable: true,
        default: "CURRENT_TIMESTAMP",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
