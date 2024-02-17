import { useCountryStore } from "../../state/store";

const ContryDetail = () => {
  const contryInfo = useCountryStore((store) => store.contryInfo);

  return (
    <div>
      {contryInfo && contryInfo.length > 0 ? contryInfo[0].name.common : ""}
    </div>
  );
};

export default ContryDetail;
