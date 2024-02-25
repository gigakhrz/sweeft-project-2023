import styled from "styled-components";
import SelectCountry from "../components/Home/SelectCountry";
import ContryDetail from "../components/Home/ContryDetail";

const Home = () => {
  return (
    <HomeWrapper>
      <SelectCountry />
      <ContryDetail />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;
  background-color: red;
  padding: 40px 0;
`;
