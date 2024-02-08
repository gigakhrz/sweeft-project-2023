import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
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
