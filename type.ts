// type of the cournties data
interface CountryApiType {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  cca3: string;
  flag?: string;
  shortName?: string;
  capital?: string;
  continents?: string[];
  currencies?:
    | {
        name: string;
        symbol: string;
      }[]
    | undefined;
  population?: number;
  region?: string;
  subregion?: string;
  borders?: string[];
  flags?: {
    alt: string;
    png: string;
    svg: string;
  };
  altSpellings: string;
}

export default CountryApiType;

export interface AirportsType {
  city: string;
  iata: string;
  name: string;
}
