import { publicProcedure, router } from "./trpc";

import { getShifts } from "../services/workerService";
import { approveWorkerApplication } from "../services/adminService";
import { z } from "zod";

export const appRouter = router({
  getShifts: publicProcedure.query(() => {
    const shifts = getShifts();
    return shifts;
  }),
  approveApplication: publicProcedure
    .input(z.string())
    .mutation(({ input }) => {
      const result = approveWorkerApplication(input);
      return result;
    }),
});

export type AppRouter = typeof appRouter;
