import styled from "styled-components";
import CurencyExchange from "../components/Exchange/CurencyExchange";

const Exchange = () => {
  return (
    <CurrencyWrapper>
      <CurencyExchange />
    </CurrencyWrapper>
  );
};

export default Exchange;

const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #add8e6;
  max-width: 850px;
  width: 100%;
  border-radius: 10px;
`;
