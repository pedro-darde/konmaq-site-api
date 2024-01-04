import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class changeSupplierField1704254556555 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "suppliers",
            "country",
            new TableColumn({
              name: "country",
              type: "varchar",
              isNullable: false,
              default: "''",
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "suppliers",
            "country",
            new TableColumn({
              name: "country",
              type: "integer",
              isNullable: false,
            })
          );
    }

}
