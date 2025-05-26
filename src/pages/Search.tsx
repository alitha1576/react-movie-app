import { useSearchParams } from "react-router-dom";
import { useState, type ChangeEvent } from "react";
import { API_SEARCH_MOVIE } from "../api/urls";
import CardsContainer from "../components/CardsContainer";
import useFetchData from "../hooks/useFetchData";
import { mapMovie } from "../utils/mappers";
import "../styles/SearchComponent.css";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const query = searchParams.get("query");

  const url = query
    ? `${API_SEARCH_MOVIE}&query=${encodeURIComponent(query)}`
    : null;

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetchData(url, mapMovie);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  if (moviesLoading) {
    return <h2>Loading...</h2>;
  }

  if (moviesError) {
    return <h2>Error loading data</h2>;
  }

  return (
    <>
    <h2 className="sectionTitle">Search for movies</h2>
      <div className="searchComponent">
        <input
          type="text"
          name="search"
          className="searchInput"
          value={inputValue}
          placeholder="start typing..."
          onChange={handleChange}
        />
        <button type="button" className="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <CardsContainer items={movies} />
    </>
  );
}
