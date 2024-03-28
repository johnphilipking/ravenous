import React, { useState } from "react";
import YelpSearch from "./utils/YelpSearch";
import "./SearchBar.css";
import { hourglass } from 'ldrs'

hourglass.register();

const SearchBar = ({setSearchResult}) => {

  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("best_match");
  const [loader, setLoader] = useState(false);

  const loaderContainer = ()=> {
    if(loader){
      return <l-hourglass size="40" bg-opacity="0.1" speed="1.75"  color="white" className={loader}></l-hourglass>;
    }
  };

  const handleSortClick = (event) => {
    setSort(event.target.id);
    if (document.querySelector(".sortOption.selected")) {
      document
        .querySelector(".sortOption.selected")
        .classList.remove("selected");
    }
    event.target.classList.add("selected");
    if(term && location){
      handleSearchButtonClick(); 
    }
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearchButtonClick = () => {
    setLoader(true);
    YelpSearch(term,location,sort)
    .then((data)=>{
      setSearchResult(data);
      setLoader(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoader(false);
    });
  };

  return (
    <div id="searchBar" className="poppins-regular">
      <div className="sortOptions poppins-semibold">
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

          <button type="button" onClick={handleSearchButtonClick}>
            Let's Go
          </button>
        </form>
      </div>

      <div>{loaderContainer()}</div>
    </div>
  );
}

export default SearchBar;
