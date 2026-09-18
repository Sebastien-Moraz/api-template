import { SQL } from "bun";

const dbAdapter = Bun.env.DB_ADAPTER || "mysql";
const dbHost = Bun.env.DB_HOST || "localhost";
const dbPort = parseInt(Bun.env.DB_PORT || "3306", 10);
const dbUser = Bun.env.DB_USERNAME || "root";
const dbPassword = Bun.env.DB_PASSWORD || "";
const dbName = Bun.env.DB_NAME || "test";

// Connection string format: mysql://user:password@host:port/database
export const db = new SQL({
   adapter: dbAdapter as "mysql" | "postgres",
   hostname: dbHost,
   port: dbPort,
   username: dbUser,
   password: dbPassword,
   database: dbName,
 });
