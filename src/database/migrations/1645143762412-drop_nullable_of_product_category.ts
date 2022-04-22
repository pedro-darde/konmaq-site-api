import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class dropNullableOfProductCategory1645143762412
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "products_categories",
      "product_id",
      new TableColumn({
        name: "product_id",
        type: "integer",
        unsigned: true,
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
