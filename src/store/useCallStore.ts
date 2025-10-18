import { create } from "zustand";

interface CallStore {
  isCalling: boolean;
  startCall: () => void;
  endCall: () => void;
}
export const useCallStore = create<CallStore>((set) => ({
  isCalling: false,
  startCall: () => set({ isCalling: true }),
  endCall: () => set({ isCalling: false }),
}));
