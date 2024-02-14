// type of the cournties data
interface CountryType {
  name: {
    common: string;
    official: string;
  };
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
}

export default CountryType;
