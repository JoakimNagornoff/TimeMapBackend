import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Test route working!" });
});

export default router;
