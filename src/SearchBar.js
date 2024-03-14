import React from "react";
import './SearchBar.css';

function SearchBar() {
  return (
    <div id="searchBar">
      <div className="sortOptions">
        <div>
          <input type="radio" name="sort_options" value="best_match" checked />
          Best Match
        </div>
        <div>
          <input type="radio" name="sort_options" value="rating" />
          Highest Rating
        </div>
        <div>
          <input type="radio" name="sort_options" value="review_count" />
          Most Reviewed
        </div>
      </div>
      <div className="searchForm">
        <div className="searchInputs">
          <input
            type="text"
            name="term"
            id="term"
            placeholder="Search Businesses"
          />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Where?"
          />
        </div>
        <button type="button" id="searchBtn">
          Let's Go
        </button>
      </div>
    </div>
  );
}

export default SearchBar;