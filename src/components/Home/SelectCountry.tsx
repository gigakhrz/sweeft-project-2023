import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const SelectCountry = () => {
  useEffect(() => {
    const fetchCountires = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,shortName,capital,altSpellings,currencies,region,subregion,continents,population,borders,flags,"
        );

        console.log((await response).data);
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
          {/* {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCountry;
