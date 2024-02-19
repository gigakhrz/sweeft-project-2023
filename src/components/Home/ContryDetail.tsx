import styled from "styled-components";
import { useCountryStore } from "../../state/store";

const ContryDetail = () => {
  const contryInfo = useCountryStore((store) => store.contryInfo);

  const contry =
    contryInfo !== null && contryInfo[0] !== null ? contryInfo[0] : {};

  return (
    <Info>
      <li>
        <h2>Capital</h2>
      </li>
      <li>
        <h2>Continent</h2>
      </li>
      <li>
        <h2>Currency</h2>
      </li>
      <li>
        <h2>Population</h2>
      </li>
      <li>
        <h2>Region</h2>
      </li>
      <li>
        <h2>Borders</h2>
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

  li {
    width: 250px;
    display: flex;
    align-items: center;

    & > h2 {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #5c5e60;
    }
  }
`;
