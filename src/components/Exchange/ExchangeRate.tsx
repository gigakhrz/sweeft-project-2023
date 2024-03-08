import { TextField } from "@mui/material";
import styled from "styled-components";
import { useCountryStore } from "../../state/store";
import { useState } from "react";
import data from "../../../data.json";

const ExchangeRate = () => {
  // curency from and to states
  const currencyFrom = useCountryStore((store) => store.currencyFrom);
  const currencyTo = useCountryStore((store) => store.currencyTo);
  const [summary, setSummary] = useState<number>(0);

  // data json types
  const exchangeRates: {
    [key: string]: {
      [key: string]: number;
    };
  } = data.exchangeRates;

  const exchangeRate = exchangeRates[currencyFrom][currencyTo];

  const calculateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const secondInputValue = parseFloat(e.target.value) * exchangeRate;
    setSummary(secondInputValue);
  };

  return (
    <Wrapper>
      <TextField
        id="standard-basic"
        label={`Exchange ${currencyFrom} to ${currencyTo}`}
        type="number"
        variant="standard"
        onChange={calculateValue}
      />

      <svg
        fill="#000000"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path
                d="M85.333,213.333h341.333C473.728,213.333,512,175.061,512,128s-38.272-85.333-85.333-85.333H85.333
				C38.272,42.667,0,80.939,0,128S38.272,213.333,85.333,213.333z"
              />
              <path
                d="M426.667,298.667H85.333C38.272,298.667,0,336.939,0,384s38.272,85.333,85.333,85.333h341.333
				C473.728,469.333,512,431.061,512,384S473.728,298.667,426.667,298.667z"
              />
            </g>
          </g>
        </g>
      </svg>
      <TextField
        id="standard-basic"
        variant="standard"
        value={summary.toFixed(2)}
      />
    </Wrapper>
  );
};

export default ExchangeRate;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 15px;
  justify-content: center;
`;
