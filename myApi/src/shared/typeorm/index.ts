import { DataSource } from "typeorm";
import { CreateRolesTable1741557763756 } from "./migrations/1741557763756-CreateRolesTable";
import { Role } from "@roles/entities/Role";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role],
  migrations: [CreateRolesTable1741557763756],
});

export { dataSource };
