import { useQuery } from "react-query";
import { useCountryStore } from "../../state/store";
import axios from "axios";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { useState } from "react";
import { AirportsType } from "../../../type";
const airportsApiKey = import.meta.env.VITE_REACT_APP_AIRPORTS_API_KEY;

const AirportsLocations = () => {
  const [searchedAirpot, setSearchedAirpot] = useState<string>("");

  // zustand states
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

        return response.data.filter((airport: AirportsType) => {
          return airport.iata !== "";
        });
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

  const filteredAirpots =
    airports && Array.isArray(airports)
      ? airports.filter((airport: any) =>
          airport.name.toLowerCase().includes(searchedAirpot.toLowerCase())
        )
      : [];

  return (
    <AirpotsInfoWrapper>
      <h1>Airports</h1>
      <TextField
        id="outlined-basic"
        label="Airport"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchedAirpot(e.target.value)
        }
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black", // Replace with your color
            },
          },
        }}
      />

      <ul>
        {filteredAirpots.map((airport: AirportsType, index) => {
          return (
            <li key={index}>
              {airport.name} - {airport.city} {airport.iata}
            </li>
          );
        })}
      </ul>
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
  padding: 40px 0;
  gap: 15px;
  @media screen and (min-width: 768px) {
    gap: 25px;
    max-width: 850px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (min-width: 768px) {
      gap: 15px;
    }
  }
`;
