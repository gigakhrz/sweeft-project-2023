import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import DefaultCountryPermisions from "./components/DefaultCountryPermisions";
import Header from "./components/Header";

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <DefaultCountryPermisions />
      <Header />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;
