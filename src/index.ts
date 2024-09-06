import express, { Express } from "express";
import adminRouter from "./routes/adminRoutes";
import workerRouter from "./routes/workerRoutes";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.use(express.json());

app.use("/api/admin", adminRouter);
app.use("/api/worker", workerRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
