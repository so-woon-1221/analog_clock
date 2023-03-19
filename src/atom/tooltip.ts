import { atom } from "recoil";

export const tooltipState = atom<{
  isOpen: boolean;
  position: {
    x: number;
    y: number;
  };
}>({
  key: "tooltipState",
  default: {
    isOpen: false,
    position: {
      x: 0,
      y: 0,
    },
  },
});
