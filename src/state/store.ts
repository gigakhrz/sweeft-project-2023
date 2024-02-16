import { create } from "zustand";
import CountryApiType from "../../type";

type SateStore = {
  // states
  country: string;
  shortCountry: string;
  contries: CountryApiType[];
  selectedContry: string;
  // setStates
  setShortCountry: (newShortCoutry: string) => void;
  setContries: (newContries: CountryApiType[]) => void;
  setCountry: (newCountry: string) => void;
  setSelectedContry: (Contry: string) => void;
};

export const useCountryStore = create<SateStore>((set) => ({
  // default states
  country: "",
  shortCountry: "",
  contries: [],
  selectedContry: "",
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
  setSelectedContry: (Contry: string) => {
    set({ selectedContry: Contry });
  },
}));
