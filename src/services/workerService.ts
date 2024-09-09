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

export const getShifts = () => {
  const filteredShifts = shifts.filter((shift) => shift.available);
  return filteredShifts;
};

export const applyToShift = (shiftId: string) => {
  const shift = shifts.find((shift) => shift.id === shift.id);
  if (shift && shift.available) {
    shift.available = false;
    return { success: true };
  }
  return { success: false };
};
