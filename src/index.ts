import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express, { Express } from "express";
import { appRouter } from "./server/index";
import cors from "cors";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.use(cors());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
