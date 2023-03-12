import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import coverPhoto from "../assets/coverPhoto.png";
import Footer from "../components/Footer";
import DepartmentCard from "../components/DepartmentCard";
import { useNavigate } from "react-router-dom";

const departmentAPI =
  "https://collectionapi.metmuseum.org/public/collection/v1/departments";

const Main = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDepartments(departmentAPI);
  }, []);

  // const [favorites, setFavorites] = useState(
  //   JSON.parse(localStorage.getItem("favorites")) || []
  // );

  // const handleAddToFavorites = (item) => {
  //   const newFavorites = [...favorites, item];
  //   setFavorites(newFavorites);
  //   localStorage.setItem("favorites", JSON.stringify(newFavorites));
  // };

  const getDepartments = (API) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      // getSearch(searchValue);
      setSearchValue("");
      navigate("/searchresult", { state: searchValue });
    } else {
      alert("Please enter a text");
    }
    console.log(searchValue);
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
        {data?.departments?.map((eachData) => (
          <Fragment key={eachData.id}>
            <DepartmentCard {...eachData} />
          </Fragment>
        ))}
      </div>
      <div style={{ paddingBottom: "30rem" }}></div>
      <Footer />
    </div>
  );
};

export default Main;
