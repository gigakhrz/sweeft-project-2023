import styled from "styled-components";
import CurencyExchange from "../components/Exchange/CurencyExchange";
import ExchangeRate from "../components/Exchange/ExchangeRate";

const Exchange = () => {
  return (
    <CurrencyWrapper>
      <CurencyExchange />
      <ExchangeRate />
    </CurrencyWrapper>
  );
};

export default Exchange;

const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #add8e6;
  max-width: 850px;
  width: 100%;
  border-radius: 10px;
  padding: 40px 0;
  gap: 35px;
`;
