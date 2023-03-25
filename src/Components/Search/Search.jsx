import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../Navbar/Navbar";
import "./Search.css";
const Search = () => {
  return (
    <>
      <Navbar />
      <div className="search_container">
        <div className="search_main">
          <input
            className="search_inp"
            type="text"
            name="search"
            placeholder="Activities"
          />
          <button type="button" className="SearchIcon">
            <div>
              <SearchIcon sx={{ color: "white", fontSize: "25px" }} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
