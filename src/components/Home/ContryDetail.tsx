import { useCountryStore } from "../../state/store";

const ContryDetail = () => {
  const contryInfo = useCountryStore((store) => store.contryInfo);
  console.log(contryInfo);
  return <div>ContryDetail</div>;
};

export default ContryDetail;
