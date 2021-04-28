import React from "react";
import { iconSearch } from "../../helpers/icons";
import task from "../../store/tasks";
import { observer } from "mobx-react";

const Search = observer(() => {
  const { searchQuery } = task.state;
  const getSearch = (e) => {
    if (e.key === "Enter") {
      task.getAllTasks(searchQuery);
      e.preventDefault();
    }
  };

  const hanleInputChange = ({ target: { value } }) => {
    task.setSearchQuery(value);
  };

  const handleClick = () => {
    task.getAllTasks(searchQuery);
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
