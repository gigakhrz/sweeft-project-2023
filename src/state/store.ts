import { create } from "zustand";
import CountryApiType from "../../type";

type SateStore = {
  country: string;
  shortCountry: string;
  setCountry: (newCountry: string) => void;
  setShortCountry: (newShortCoutry: string) => void;
  contries: CountryApiType[];
  setContries: (newContries: CountryApiType[]) => void;
};

export const useCountryStore = create<SateStore>((set) => ({
  // default states
  country: "",
  shortCountry: "",
  contries: [],
  //   setState functions
  setCountry: (newCountry: string) => {
    set({ country: newCountry });
  },
  setShortCountry: (newShortCoutry: string) => {
    set({ shortCountry: newShortCoutry });
  },
  setContries: (newContries: CountryApiType[]) => {
    set({ contries: newContries });
  },
}));
