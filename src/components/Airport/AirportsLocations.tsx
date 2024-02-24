import { useQuery } from "react-query";
import { useCountryStore } from "../../state/store";
import axios from "axios";
import styled from "styled-components";
const airportsApiKey = import.meta.env.VITE_REACT_APP_AIRPORTS_API_KEY;

const AirportsLocations = () => {
  const countryInfo = useCountryStore((store) => store.contryInfo);

  const airportsQueryKey = ["cachedAirport", countryInfo?.[0]?.cca2];
  const { data: airports, isLoading: loading } = useQuery(
    airportsQueryKey,
    async () => {
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/airports?country=${countryInfo?.[0]?.cca2}&fields=city,iata,name`,
          {
            headers: { "X-Api-Key": airportsApiKey },
          }
        );

        return response.data;
      } catch (error) {
        console.error("Error fetching airports:", error);
        throw error; // Rethrow the error to be handled by the caller
      }
    }
  );

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  if (!airports) {
    return <div>No airports data available</div>;
  }

  console.log(airports);
  return (
    <AirpotsInfoWrapper>
      <input type="text" placeholder="search airpot" />
      AirportsLocations
    </AirpotsInfoWrapper>
  );
};

export default AirportsLocations;

const AirpotsInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
