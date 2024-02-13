import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";

const SelectCountry = () => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={[]}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Countries</em>;
            }
          }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Countries</em>
          </MenuItem>
          {/* {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCountry;
