import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import CountryApiType from " ../../../type";
import { useCountryStore } from "../../state/store";

const SelectCountry = () => {
  // setStates
  const setContries = useCountryStore((store) => store.setContries);

  // state
  const contries = useCountryStore((Store) => Store.contries);

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

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={[]}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Countries</em>;
            }
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Countries</em>
          </MenuItem>
          {/* maping contries names */}
          {contries.map((contry) => (
            <MenuItem key={contry.name.common} value={contry.name.common}>
              {contry.name.common}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCountry;
