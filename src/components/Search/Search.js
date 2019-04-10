import React from "react";

import "./search.scss";

class Search extends React.Component {
  handleSetSearchString = value => {
    this.setState({ searchString: value });
  };
  handleFilterItems = (itemsToFilter, fieldToFilter, searchString) => {
    let arrayFiltered = [];

    if (searchString === "") return itemsToFilter;

    let condition = false;
    for (let i = 0; i < itemsToFilter.length; i++) {
      condition =
        itemsToFilter[i][fieldToFilter]
          .toLowerCase()
          .search(searchString.toLowerCase()) !== -1;

      if (condition) {
        let elementFiltered = JSON.parse(JSON.stringify(itemsToFilter[i])); //deep copy
        arrayFiltered.push(elementFiltered);
      }
    }
    return arrayFiltered;
  };
  render() {
    const { setFilteredItems, itemsToFilter, fieldToFilter } = this.props;
    return (
      <div className="search__container">
        <input
          defaultValue=""
          onChange={e => {
            let itemsFiltered = this.handleFilterItems(
              itemsToFilter,
              fieldToFilter,
              e.target.value
            );
            setFilteredItems(itemsFiltered);
          }}
          className="search__input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}

export default Search;
