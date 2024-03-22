import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("best_match");

  const handleSortClick = (event) => {
    setSort(event.target.id);
    if (document.querySelector(".sortOption.selected")) {
      document
        .querySelector(".sortOption.selected")
        .classList.remove("selected");
    }
    event.target.classList.add("selected");
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    const msg =
      "Searching Yelp with " + [term] + ", " + [location] + ", " + [sort];
    console.log(msg);
  };

  return (
    <div id="searchBar">
      <div className="sortOptions">
        <div>
          <span
            id="best_match"
            className="sortOption"
            onClick={handleSortClick}
          >
            Best
            <br />
            Match
          </span>
        </div>
        <div>
          <span id="rating" className="sortOption" onClick={handleSortClick}>
            Highest
            <br />
            Rating
          </span>
        </div>
        <div>
          <span
            id="review_count"
            className="sortOption"
            onClick={handleSortClick}
          >
            Most
            <br />
            Reviewed
          </span>
        </div>
      </div>
      <div className="searchForm">
        <form action="#">
          <div className="searchInputs">
            <input
              type="text"
              name="term"
              id="term"
              placeholder="Search Businesses"
              value={term}
              onChange={handleTermChange}
            />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Where?"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <input type="hidden" name="sort" id="sort" value={sort} />

          <button type="submit" onClick={handleSearchButtonClick}>
            Let's Go
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
