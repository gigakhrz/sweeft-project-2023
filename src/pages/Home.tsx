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
  background-color: #add8e6;
  padding: 40px 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.2) 0px 2px 1px -1px;
  border-radius: 10px;
`;
