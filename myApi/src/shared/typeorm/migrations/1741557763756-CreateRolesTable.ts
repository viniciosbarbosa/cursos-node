import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRolesTable1741557763756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "roles",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "string",
            isUnique: true,
          },
          {
            name: "create_at",
            type: "timestamp",
            isUnique: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("roles");
  }
}
