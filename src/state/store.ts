import { create } from "zustand";

type SateStore = {
  country: string;
  shortCountry: string;
  setCountry: (newCountry: string) => void;
  setShortCountry: (newShortCoutry: string) => void;
};

export const useCountryStore = create<SateStore>((set) => ({
  // default states
  country: "",
  shortCountry: "",

  //   setState functions
  setCountry: (newCountry: string) => {
    set({ country: newCountry });
  },
  setShortCountry: (newShortCoutry: string) => {
    set({ shortCountry: newShortCoutry });
  },
}));
