import { useState, useEffect } from "react";
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

function Controls({ onSearch }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";

    onSearch(search, regionValue);
  }, [onSearch, region?.value, search]);

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
