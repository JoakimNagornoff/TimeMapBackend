interface Application {
  id: string;
  workerName: string;
  shiftId: string;
  status: "pending" | "approved" | "rejected";
}

interface Shift {
  id: string;
  title: string;
  description: string;
  date: string;
  available: boolean;
}

const shifts: Shift[] = [
  {
    id: "1",
    title: "Morning Shift",
    description: "Morning shift",
    date: "2024-09-10",
    available: true,
  },
  {
    id: "2",
    title: "Evening Shift",
    description: "Evening shift",
    date: "2024-09-11",
    available: true,
  },
];

const applications: Application[] = [
  { id: "1", workerName: "John Doe", shiftId: "1", status: "pending" },
];

export const createNewShift = ({
  title,
  date,
  description,
}: Partial<Shift>) => {
  const newShift: Shift = {
    id: (shifts.length + 1).toString(),
    title: title || "New Shift",
    date: date || new Date().toISOString(),
    description: description || "No description",
    available: true,
  };
  shifts.push(newShift);
  return newShift;
};

export const getApplications = () => {
  return applications.filter((app) => app.status === "pending");
};

export const approveWorkerApplication = (applicationId: string) => {
  const application = applications.find((app) => app.id === applicationId);

  if (application && application.status === "pending") {
    application.status = "approved";
    return { success: true };
  }
  return { success: false };
};
