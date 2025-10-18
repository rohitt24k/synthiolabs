import { create } from "zustand";

interface DoctorCardStore {
  selectedDoctorId: string | null;
  selectDoctor: (doctorId: string) => void;
  clearSelection: () => void;
}

export const useDoctorCardStore = create<DoctorCardStore>((set) => ({
  selectedDoctorId: null,
  selectDoctor: (doctorId: string) => set({ selectedDoctorId: doctorId }),
  clearSelection: () => set({ selectedDoctorId: null }),
}));
