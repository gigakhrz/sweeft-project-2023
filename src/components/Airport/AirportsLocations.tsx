import { useQuery } from "react-query";
import { useCountryStore } from "../../state/store";
import axios from "axios";
import styled from "styled-components";
import { TextField } from "@mui/material";
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

  // const filteredAirpots = airports && Array.isArray(airports) ?  airports.filter((airport: any) =>
  // airport.name.toLowerCase().includes(countryName.toLowerCase())
  // )

  return (
    <AirpotsInfoWrapper>
      <h1>Airports</h1>
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </AirpotsInfoWrapper>
  );
};

export default AirportsLocations;

const AirpotsInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #add8e6;
  border-radius: 5px;
  width: 350px;
  padding-top: 30px;
`;
