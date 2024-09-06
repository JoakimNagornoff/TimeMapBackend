import express, { Router } from "express";
import {
  getAvailableShifts,
  applyForShift,
} from "../controllers/workerController";

const workerRouter: Router = express.Router();

workerRouter.get("/shifts", getAvailableShifts);

workerRouter.post("/apply/:shiftId", applyForShift);

export default workerRouter;
