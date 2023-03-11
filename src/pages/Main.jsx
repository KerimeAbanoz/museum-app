import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import coverPhoto from "../assets/coverPhoto.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const departmentAPI =
  "https://collectionapi.metmuseum.org/public/collection/v1/departments";
const searchAPI =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const Main = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getArts(departmentAPI);
  }, []);

  // const [favorites, setFavorites] = useState(
  //   JSON.parse(localStorage.getItem("favorites")) || []
  // );

  // const handleAddToFavorites = (item) => {
  //   const newFavorites = [...favorites, item];
  //   setFavorites(newFavorites);
  //   localStorage.setItem("favorites", JSON.stringify(newFavorites));
  // };

  const getArts = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => {
        // setData((data) => [...data, res.data]);
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
    console.log(loading);
  };

  const result = () => {
    setLoading(true);
    axios
      .get(searchAPI + searchValue)
      .then((res) => {
        setResults(data.results);
        console.log(data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      getArts(searchAPI + searchValue);
      setSearchValue("");
      result(searchValue);
    } else {
      alert("Please enter a text");
    }
    console.log(searchValue);
  };

  return (
    <div style={{ position: "relative" }}>
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
        onSubmit={handleSubmit}
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
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            // onChange={handleSearch}
          />
          <button
            type="submit"
            style={{
              // paddingTop: "1rem",
              height: "2rem",
              color: "#14532d",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <SearchIcon style={{ fontSize: "2rem", color: "#263963" }} />
          </button>
          <button
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
          </button>
        </div>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {results?.objectIDs?.map((result) => (
          <div key={result.id}>{result}</div>
        ))}
        {data?.departments?.map((eachData) => (
          <div key={eachData.departmentId}>
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "3px",
                boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.5)",
                overflow: "hidden",
                margin: "1rem",
                width: "250px",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                onClick={() => navigate("department/" + eachData.departmentId)}
              >
                <img
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    maxWidth: "100%",
                  }}
                  loading="lazy"
                  src={defaultImage}
                  alt="departmentimage"
                />
                <h5>{eachData.displayName}</h5>
              </div>
              {/* <div>
                <FavoriteBorderIcon
                  onClick={(item) => handleAddToFavorites()}
                />
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div style={{ paddingBottom: "30rem" }}></div>
      <Footer />
    </div>
  );
};

export default Main;
