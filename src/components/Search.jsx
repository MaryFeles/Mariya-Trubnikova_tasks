import React from "react";
import { iconSearch } from "../helpers/icons";
import todo from "../store/todo";
import { observer } from "mobx-react";

const Search = observer(() => {
  const { searchQuery } = todo.state;
  const getSearch = (e) => {
    if (e.key === "Enter") {
      todo.getAllTodos(searchQuery);
      e.preventDefault();
    }
  };

  const hanleInputChange = ({ target: { value } }) => {
    todo.setSearchQuery(value);
  };

  const handleClick = () => {
    todo.getAllTodos(searchQuery);
  };

  return (
    <form className="header__search-wrap">
      <div className="iconSearch" onClick={handleClick}>{iconSearch}</div>
      <input
        className="header__search"
        type="text"
        placeholder="Search for any training you want"
        onKeyPress={(e) => getSearch(e)}
        onChange={hanleInputChange}
        value={searchQuery}
      ></input>
    </form>
  );
});

export default Search;
