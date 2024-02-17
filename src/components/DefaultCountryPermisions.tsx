import axios from "axios";
import { useCountryStore } from "../state/store";
import { useEffect } from "react";
import CountryApiType from "../../type";

const DefaultCountryPermisions = () => {
  // states
  const country = useCountryStore((store) => store.country);
  const shortCountry = useCountryStore((store) => store.shortCountry);
  const contries = useCountryStore((Store) => Store.contries);

  // setStates
  const setCountry = useCountryStore((store) => store.setCountry);
  const setShortCountry = useCountryStore((store) => store.setShortCountry);
  const setContryInfo = useCountryStore((store) => store.setContryInfo);
  const setCountries = useCountryStore((store) => store.setContries);

  // If the user agrees to share the address
  const handleSetContryInfo = (selectedContry: string): void => {
    const selected = contries.filter((contry) => {
      return contry.name.common === selectedContry;
    });

    setContryInfo(selected);
  };

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
        handleSetContryInfo(countryName.long_name);
      }
    }
  };

  // this useEfect fetching all contries data
  useEffect(() => {
    const fetchCountires = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,shortName,capital,altSpellings,currencies,region,subregion,continents,population,borders,flags,"
        );

        const data = response.data.map((country: CountryApiType) => {
          // info about currency
          const currencies = country.currencies
            ? Object.keys(country.currencies).map((currencyCode: any) => ({
                name: country.currencies![currencyCode].name,
                symbol: country.currencies![currencyCode].symbol,
              }))
            : [];

          return {
            name: {
              common: country.name.common,
              official: country.name.official,
            },

            capital: country.capital,
            currencies: currencies.length > 0 ? currencies : undefined,
            region: country.region,
            subregion: country.subregion,
            continents: country.continents?.[0],
            population: country.population,
            borders: country.borders ? country.borders.join(" ") : "",
            flags: {
              alt: country.flags?.alt,
              png: country.flags?.png,
              svg: country.flags?.svg,
            },
            altSpellings: {
              shortName: country.altSpellings[0],
            },
          };
        });

        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountires();
  }, []);

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
  }, [contries]);

  return (
    <div>
      <h1>{country}</h1>
      <h2>{shortCountry}</h2>
      <></>
    </div>
  );
};

export default DefaultCountryPermisions;
