import styled from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";
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
import { useCountryStore } from "./state/store";

function App() {
  const queryClient = new QueryClient();
  const shortName = useCountryStore((store) => store.shortCountry);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppWrapper>
          <GlobalStyles />
          <DefaultCountryPermisions />
          <Header />
          <Routes>
            {shortName && (
              <Route
                path="/"
                element={<Navigate to={`/Countries/${shortName}`} replace />}
              />
            )}
            <Route path="/Countries/:name" element={<Home />} />
            <Route path="/Countries/:name/Exchange" element={<Exchange />} />
            <Route path="/Countries/:name/Airports" element={<Airpots />} />
          </Routes>
        </AppWrapper>
      </QueryClientProvider>
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
  gap: 25px;
  padding: 0 15px;
`;
