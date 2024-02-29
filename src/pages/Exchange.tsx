import styled from "styled-components";

const Exchange = () => {
  return (
    <CurrencyWrapper>
      <h1>Currency Exchange</h1>
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
