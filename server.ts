import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import apiRoutes from "./routes/index.routes.ts";

const { PORT } = config()

const app = new Application();

// app.use((ctx) => {
//     ctx.response.type = "text/html";
//     ctx.response.body = "<h1>Hola Mundo!!!</h1>"
// });
app.use(apiRoutes.routes())

await app.listen({ port: +PORT })