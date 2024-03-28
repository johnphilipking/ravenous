import React, { useState } from "react";
//import mockData from "./mockData.json";
import "./App.css";
import BusinessList from "./Business";
import SearchBar from "./SearchBar";


function App() {

  //let searchResult = [];
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="App">
      <header class="header"><h1 className="poppins-semibold">Ravenous</h1></header>
      <SearchBar setSearchResult={setSearchResult} />
      <BusinessList searchResult={searchResult} />
    </div>
  );
}

export default App;
