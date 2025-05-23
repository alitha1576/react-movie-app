import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { API_SEARCH_MOVIE } from "../api/urls";
import "../styles/SearchComponent.css";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const query = searchParams.get("query");

  const url = query
    ? `${API_SEARCH_MOVIE}&query=${encodeURIComponent(query)}`
    : null;

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const query = inputValue.trim();
    if (!query) {
      setSearchParams({});
      return;
    }
    setSearchParams({ query });
    setInputValue("");
  };

  return (
    <>
      <div className="searchComponent">
        <input
          type="text"
          name="search"
          className="searchInput"
          value={inputValue}
          placeholder="start..."
          onChange={handleChange}
        />
        <button type="button" className="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
}
