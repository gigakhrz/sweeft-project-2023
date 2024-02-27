import styled from "styled-components";
import AirportsLocations from "../components/Airport/AirportsLocations";

const Airpots = () => {
  return (
    <AirpotsWrapper>
      <AirportsLocations />
    </AirpotsWrapper>
  );
};

export default Airpots;

const AirpotsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
