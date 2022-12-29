import { useState } from "react";
import Search from "../Search/Search";
import { CustomSelect } from "../Select/Select";
import { WrapperControls } from "./StyledControls";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

function Controls() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <WrapperControls>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </WrapperControls>
  );
}

export default Controls;
