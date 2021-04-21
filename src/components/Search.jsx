import React from "react";
import search from "../store/search";
import {iconSearch} from "../helpers/icons";

const Search = () => {
  return (
    <form className="header__search-wrap">
    {iconSearch}
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
