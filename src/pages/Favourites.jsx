import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

const Favourites = () => {
  return (
    <div>
      {" "}
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0.5rem",
        }}
      >
        <input
          type="search"
          placeholder="Search"
          style={{
            width: "20rem",
            height: "2rem",
            borderRadius: "6px",
            outline: "2px solid transparent",
            padding: "4px",
            margin: "0.5rem",
          }}
        />
        <SearchIcon
          style={{ fontSize: "2rem", margin: "1rem", color: "white" }}
        />
        <button
          type="submit"
          style={{
            color: "white",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          Search
        </button>
        <FilterAltIcon
          style={{ fontSize: "2rem", margin: "1rem", color: "white" }}
        />
        <button
          type="submit"
          style={{
            color: "white",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          Filter
        </button>
      </form>
    </div>
  );
};

export default Favourites;
