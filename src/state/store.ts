import { create } from "zustand";
import CountryApiType from "../../type";

type SateStore = {
  // states
  country: string;
  shortCountry: string;
  contries: CountryApiType[];
  contryInfo: null | CountryApiType[];
  currencyFrom: string;
  currencyTo: string;
  // setStates
  setShortCountry: (newShortCoutry: string) => void;
  setContries: (newContries: CountryApiType[]) => void;
  setCountry: (newCountry: string) => void;
  setContryInfo: (Contry: null | CountryApiType[]) => void;
  setCurrencyFrom: (from: string) => void;
  setCurrencyTo: (to: string) => void;
};

export const useCountryStore = create<SateStore>((set) => ({
  // default states
  country: "",
  shortCountry: "",
  contries: [],
  contryInfo: null,
  currencyFrom: "₾",
  currencyTo: "$",
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

  // curency to and from setstates
  setCurrencyFrom: (from: string) => {
    set({ currencyFrom: from });
  },
  setCurrencyTo: (to: string) => {
    set({ currencyTo: to });
  },
}));
