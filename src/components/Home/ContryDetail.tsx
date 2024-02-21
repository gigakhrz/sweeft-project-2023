import styled from "styled-components";
import { useCountryStore } from "../../state/store";

const ContryDetail = () => {
  const contryInfo = useCountryStore((store) => store.contryInfo);

  if (!contryInfo || contryInfo.length === 0) {
    return <div>Loading...</div>;
  }

  if (!contryInfo[0].currencies) {
    return <div>Loading...</div>;
  }
  const currency = contryInfo[0].currencies;

  return (
    <Info>
      <li>
        <h2>Capital</h2>
        <h3>{contryInfo !== null ? contryInfo[0].capital : "N/A"}</h3>
      </li>
      <li>
        <h2>Continent</h2>
        <h3>{contryInfo !== null ? contryInfo[0].continents : "N/A"}</h3>
      </li>
      <li>
        <h2>Currency</h2>
        <h3>
          {currency?.[0]?.name ? currency?.[0]?.name : "N/A"}{" "}
          {currency?.[0]?.symbol ? currency?.[0]?.symbol : "N/A"}
        </h3>
      </li>
      <li>
        <h2>Population</h2>
        <h3>{contryInfo !== null ? contryInfo[0].population : "N/A"}</h3>
      </li>
      <li>
        <h2>Region</h2>
        <h3>{contryInfo !== null ? contryInfo[0].region : "N/A"}</h3>
      </li>
      <li>
        <h2>Borders</h2>
        <h3>{contryInfo !== null ? contryInfo[0].borders : "N/A"}</h3>
      </li>
    </Info>
  );
};

export default ContryDetail;

const Info = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #add8e6;
  border-radius: 7px;

  li {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    & > h2 {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #5c5e60;
    }

    & > h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #5c5e60;
    }
  }
`;
