import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Search.css";
import NgoCard from "../Cards/NgoCard";
const API = "http://localhost:5000/regngos";
const Search = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
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
      <NgoCard ngo={data} />
    </>
  );
};

export default Search;
