import { StyledInputContainer, StyledInput } from "./StyledSearch";
import { IoSearch } from "react-icons/io5";

function Search({ search, setSearch }) {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledInputContainer>
      <IoSearch size={"16px"} />
      <StyledInput onChange={(e) => handleInputChange(e)} value={search} />
    </StyledInputContainer>
  );
}

export default Search;
