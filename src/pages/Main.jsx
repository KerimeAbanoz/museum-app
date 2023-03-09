import axios from "axios";
import React, { useEffect, useState } from "react";
import ArtCard from "../components/ArtCard";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

const API = "https://collectionapi.metmuseum.org/public/collection/v1/objects";
const searchAPI =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";

const denemearray = [4577, 4656, 5678, 567, 123, 345, 57, 7890, 7756];

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const getSpecificArtWork = async () => {
    setLoading(true);
    denemearray.forEach((id) =>
      axios
        .get(API + "/" + id)
        .then((res) => {
          // console.log(res.data);
          setData((data) => [...data, res.data]);
        })
        .catch((error) => {
          console.log(error);
        })
    );
    setLoading(false);
  };

  useEffect(() => {
    getSpecificArtWork();
  }, []);

  const getArtWorkBySearch = async () => {
    setLoading(true);
    axios
      .get(searchAPI + searchValue)
      .then((res) => {
        console.log(res?.data?.objectIDs);
        setData((data) => [...data, res.data?.objectIDs]);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getArtWorkBySearch(searchAPI + searchValue);
    console.log(searchValue);
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0.5rem",
        }}
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          type="search"
          placeholder="Search"
          style={{
            width: "20rem",
            height: "2rem",
            border: "none",
            borderRadius: "6px",
            outline: "2px solid transparent",
            padding: "4px",
            margin: "0.5rem",
            boxShadow: "1px 1px 5px 1px #d1e3d8",
          }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchIcon
          style={{ fontSize: "2rem", margin: "1rem 0", color: "#14532d" }}
        />
        <button
          type="submit"
          style={{
            color: "#14532d",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
        <FilterAltIcon
          style={{ fontSize: "2rem", margin: "1rem", color: "#14532d" }}
        />
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data?.map((work) => (
          <ArtCard key={work.id} {...work} />
        ))}
      </div>
    </>
  );
};

export default Main;
