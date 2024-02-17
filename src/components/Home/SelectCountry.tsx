import { FormControl, MenuItem, Select } from "@mui/material";
import { useCountryStore } from "../../state/store";
import { SelectChangeEvent } from "@mui/material/Select"; // Import SelectChangeEvent
import styled from "styled-components";

const SelectCountry = () => {
  // setStates
  const setContry = useCountryStore((store) => store.setCountry);
  const setContryInfo = useCountryStore((store) => store.setContryInfo);

  // state
  const contries = useCountryStore((Store) => Store.contries);
  const contry = useCountryStore((store) => store.country);

  // this function will catch selected country name

  const choosenContry = (e: SelectChangeEvent<string>): void => {
    const selected = contries.filter((contry) => {
      return contry.name.common === e.target.value;
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
