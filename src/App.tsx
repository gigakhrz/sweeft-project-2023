import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import DefaultCountryPermisions from "./components/DefaultCountryPermisions";
import Header from "./components/Header";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Exchange from "./pages/Exchange";
import Airpots from "./pages/Airpots";

function App() {
  return (
    <Router>
      <AppWrapper>
        <GlobalStyles />
        <DefaultCountryPermisions />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/Countries" replace />} />
          <Route path="/Countries" element={<Home />} />
          <Route path="/Countries/Exchange" element={<Exchange />} />
          <Route path="/Countries/Airports" element={<Airpots />} />
        </Routes>
      </AppWrapper>
    </Router>
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
