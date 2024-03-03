import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

const CurencyExchange = () => {
  return (
    <CurencyExchangeWrapper>
      <h1>Curency Exchange</h1>
      <div className="inputsWrapper">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="from-currency-label">From</InputLabel>
          <Select labelId="from-currency-label" id="from-currency" label="From">
            <MenuItem value="₾">₾</MenuItem>
            <MenuItem value="$">$</MenuItem>
            <MenuItem value="£">£</MenuItem>
            {/* <MenuItem value="€" {*disabled={currencyTo === "€"}*}>
              €
            </MenuItem> */}
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="from-currency-label">From</InputLabel>
          <Select labelId="from-currency-label" id="from-currency" label="From">
            <MenuItem value="₾">₾</MenuItem>
            <MenuItem value="$">$</MenuItem>
            <MenuItem value="£">£</MenuItem>
            {/* <MenuItem value="€" {*disabled={currencyTo === "€"}*}>
              €
            </MenuItem> */}
          </Select>
        </FormControl>
      </div>
    </CurencyExchangeWrapper>
  );
};

export default CurencyExchange;

const CurencyExchangeWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  .inputsWrapper {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
