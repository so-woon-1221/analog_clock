import { atom, selector } from "recoil";

export const timeState = atom<Date | undefined>({
  key: "timeState",
  default: undefined,
});

export const timeStringState = selector<string>({
  key: "timeStringState",
  get: ({ get }) => {
    const time = get(timeState);
    if (time !== undefined) {
      return time.toLocaleDateString() + " " + time.toLocaleTimeString();
    }
    return "";
  },
});
