import { create } from "zustand";
import { BetDetailsProps } from "@/pages/BetPage";

interface BetStore {
	betDetails: BetDetailsProps | null;
	setBetDetails: (details: BetDetailsProps) => void;
	clearBetDetails: () => void;
}

export const useBetDetails = create<BetStore>((set) => ({
	betDetails: null,
	setBetDetails: (details) =>
		set((state) => ({ betDetails: { ...state.betDetails, ...details } })),
	clearBetDetails: () => set({ betDetails: null }),
}));
