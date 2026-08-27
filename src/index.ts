import { Elysia } from "elysia";
import { openapi } from '@elysia/openapi'
import { user } from "./modules/user";
import { checkEnvVariables } from "./config";

checkEnvVariables();

const app = new Elysia()
  .use(openapi({
    path: "/docs",
    documentation: {
      info: {
        title: "Elysia template",
        description: "A simple Elysia demo with OpenAPI documentation",
        version: "1.0.0",
        contact: {
          name: "Contact us for more informations",
          email: "contact@koppa.pro"
        }
      }
    }
  }))
  .use(user);

// if Dun.env.S3_ENDPOINT is set load the S3 plugin
if (Bun.env.S3_ENDPOINT && Bun.env.S3_ACCESS_KEY && Bun.env.S3_SECRET_KEY) // app.use(s3);

if (Bun.env.REDIS_URL) // app.use(redis);

if (Bun.env.DB_HOST && Bun.env.DB_USERNAME && Bun.env.DB_PASSWORD && Bun.env.DB_NAME) // app.use(db);

app.listen({
  port: Number(Bun.env.PORT) || 3000,
  hostname: Bun.env.URL || "0.0.0.0",
});

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
