import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ArtCard from "../components/ArtCard";
import coverPhoto from "../assets/coverPhoto.png";
import SearchIcon from "@mui/icons-material/Search";

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
  const objectAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

  const location = useLocation();

  useEffect(() => {
    getSearch(location.state);
  }, []);

  const getSearch = (e) => {
    setLoading(true);
    axios
      .get(searchAPI + e)
      .then((res) => {
        setResults(res.data);
        getSearchedArts(res.data.objectIDs);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  };

  const getSearchedArts = (arr) => {
    console.log(arr, "hoopaa");
    arr.forEach((id) => {
      setLoading(true);
      axios
        .get(objectAPI + id)
        .then((res) => {
          // setSearchResults(res.data);
          // console.log(res.data);
          setSearchResults((arr) => [...arr, res.data]);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(setLoading(false));
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <div>
        <form
          style={{
            backgroundImage: `url(${coverPhoto})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            minHeight: "30vh",
            display: "flex",
            justifyContent: "center",
            padding: "0.5rem",
          }}
        >
          <div style={{ marginTop: "8rem" }}>
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
            />
            <button
              type="submit"
              style={{
                height: "2rem",
                color: "#14532d",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <SearchIcon style={{ fontSize: "2rem", color: "#263963" }} />
            </button>
            {/* <button
              style={{
                // paddingTop: "1rem",
                height: "2rem",
                color: "#14532d",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              >
              <FilterAltIcon style={{ fontSize: "2rem", color: "#263963" }} />
            </button> */}
          </div>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${coverPhoto})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            minHeight: "30vh",
            display: "flex",
            justifyContent: "center",
            padding: "0.5rem",
          }}
        ></div>
        {searchResults?.map((result) => (
          <Fragment key={result.id}>
            <ArtCard {...result} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
