import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [],
  migrations: [],
});

export { dataSource };
