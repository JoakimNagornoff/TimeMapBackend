import { Request, Response } from "express";
import { getShifts, applyToShift } from "../services/workerService";

export const getAvailableShifts = (req: Request, res: Response) => {
  const shifts = getShifts();
  return res.status(200).json(shifts);
};

export const applyForShift = (req: Request, res: Response) => {
  const { shiftId } = req.params;
  const result = applyToShift(shiftId);
  if (result.success) {
    return res
      .status(200)
      .json({ message: "Successfully applied for the shift!" });
  } else {
    return res.status(400).json({ message: "Failed to apply for shift." });
  }
};
