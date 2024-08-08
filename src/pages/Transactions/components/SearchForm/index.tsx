import { FaSearch } from "react-icons/fa";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscar operações financeiras" />

      <button type="submit">
        <FaSearch />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
