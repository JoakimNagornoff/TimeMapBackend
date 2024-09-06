import { Request, Response } from "express";
import {
  createNewShift,
  getApplications,
  approveWorkerApplication,
} from "../services/adminService";

export const createShift = (req: Request, res: Response) => {
  const { title, date, description } = req.body;
  const newShfit = createNewShift({ title, date, description });
  return res.status(201).json(newShfit);
};

export const getPendingApplications = (req: Request, res: Response) => {
  const applications = getApplications();
  return res.status(200).json(applications);
};

export const approveApplication = (req: Request, res: Response) => {
  console.log(req.params);
  const { applicationId } = req.params;
  const result = approveWorkerApplication(applicationId);
  if (result.success) {
    return res
      .status(200)
      .json({ message: `Application ${applicationId} approved!` });
  } else {
    return res.status(400).json({ message: "Failed to approve application." });
  }
};
