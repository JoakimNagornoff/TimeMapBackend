import express, { Router } from "express";
import {
  createShift,
  getPendingApplications,
  approveApplication,
} from "../controllers/adminController";

const adminRouter: Router = express.Router();

adminRouter.post("/shifts", createShift);

adminRouter.get("/applications", getPendingApplications);

adminRouter.post("/applications/approve/:applicationId", approveApplication);

export default adminRouter;
