import styled from "styled-components";
import SelectCountry from "../components/Home/SelectCountry";

const Home = () => {
  return (
    <HomeWrapper>
      <SelectCountry />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
