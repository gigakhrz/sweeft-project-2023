import { create } from "zustand";
import CountryApiType from "../../type";

type SateStore = {
  // states
  country: string;
  shortCountry: string;
  contries: CountryApiType[];
  contryInfo: null | CountryApiType[];
  // setStates
  setShortCountry: (newShortCoutry: string) => void;
  setContries: (newContries: CountryApiType[]) => void;
  setCountry: (newCountry: string) => void;
  setContryInfo: (Contry: null | CountryApiType[]) => void;
};

export const useCountryStore = create<SateStore>((set) => ({
  // default states
  country: "",
  shortCountry: "",
  contries: [],
  contryInfo: null,
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
  setContryInfo: (Contry: null | CountryApiType[]) => {
    set({ contryInfo: Contry });
  },
}));
