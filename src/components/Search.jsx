import React from "react";
import search from "../store/search";

const Search = () => {
  return (
    <form className="header__search-wrap">
      <input
        className="header__search"
        type="text"
        placeholder="Search for any training you want"
        onChange={({ target }) => search.onSearch(target)}
      ></input>
    </form>
  );
};

export default Search;
