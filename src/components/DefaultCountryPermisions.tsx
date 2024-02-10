import axios from "axios";
import { useCountryStore } from "../state/store";
import { useEffect } from "react";

const DefaultCountryPermisions = () => {
  // states
  const country = useCountryStore((store) => store.country);
  const shortCountry = useCountryStore((store) => store.shortCountry);

  // setStates
  const setCountry = useCountryStore((store) => store.setCountry);
  const setShortCountry = useCountryStore((store) => store.setShortCountry);

  //   fetch country function to fetch country if user will acces permision
  const fetchCountry = async (latitude: number, longtitude: number) => {
    const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY || "";
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longtitude}&key=${apiKey}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.results && data.results.length > 0) {
      const countryResult = data.results.find(
        (result: any) =>
          result.types.includes("country") || result.types.includes("political")
      );
      if (countryResult) {
        const countryName = countryResult.address_components[3];
        setCountry(countryName.long_name);
        setShortCountry(countryName.short_name);
      }
    }
  };

  // this useEfec will fetch counrty if user be able
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchCountry(latitude, longitude);
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <h1>{country}</h1>
      <h2>{shortCountry}</h2>
      <></>
    </div>
  );
};

export default DefaultCountryPermisions;
