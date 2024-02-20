import { useQuery } from "react-query";

const AirportsLocations = () => {

    const airportsQueryKey = ["cachedAirport", countryInfo?.[0]?.cca2];
    const {data:airpots, isLoading:loading}= useQuery(
        airportsQueryKey
        async () => {

        }
    );
  return <div>AirportsLocations</div>;
};

export default AirportsLocations;
