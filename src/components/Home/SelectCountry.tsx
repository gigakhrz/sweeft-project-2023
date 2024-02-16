import { FormControl, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import CountryApiType from " ../../../type";
import { useCountryStore } from "../../state/store";
import { SelectChangeEvent } from "@mui/material/Select"; // Import SelectChangeEvent
import styled from "styled-components";

const SelectCountry = () => {
  // setStates
  const setContries = useCountryStore((store) => store.setContries);
  const setContry = useCountryStore((store) => store.setCountry);
  const setContryInfo = useCountryStore((store) => store.setContryInfo);

  // state
  const contries = useCountryStore((Store) => Store.contries);
  const contry = useCountryStore((store) => store.country);

  useEffect(() => {
    const fetchCountires = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,shortName,capital,altSpellings,currencies,region,subregion,continents,population,borders,flags,"
        );

        const data = response.data.map((country: CountryApiType) => {
          // info about curryency
          const currencies = country.currencies
            ? Object.keys(country.currencies).map((currencyCode: any) => ({
                name: country.currencies![currencyCode].name,
                symbol: country.currencies![currencyCode].symbol,
              }))
            : [];

          return {
            name: {
              common: country.name.common,
              official: country.name.official,
            },

            capital: country.capital,
            currencies: currencies.length > 0 ? currencies : undefined,
            region: country.region,
            subregion: country.subregion,
            continents: country.continents?.[0],
            population: country.population,
            borders: country.borders ? country.borders.join(" ") : "",
            flags: {
              alt: country.flags?.alt,
              png: country.flags?.png,
              svg: country.flags?.svg,
            },
            altSpellings: {
              shortName: country.altSpellings[0],
            },
          };
        });

        setContries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountires();
  }, []);

  // this function will catch selected country name

  const choosenContry = (e: SelectChangeEvent<string>): void => {
    const selected = contries.filter((contry) => {
      contry.name.common === e.target.value;
    });

    // check if selected is not undefined

    if (selected) {
      setContry(e.target.value);
      setContryInfo(selected);
    } else {
      setContry(""); // Reset selected country if not found
      setContryInfo(null);
    }
  };

  return (
    <MainInput>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          value={contry}
          onChange={choosenContry}
        >
          {contries.map(
            (country) =>
              country.name && (
                <MenuItem key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </MenuItem>
              )
          )}
        </Select>
      </FormControl>
    </MainInput>
  );
};

export default SelectCountry;

const MainInput = styled.div`
  width: 250px;
`;
