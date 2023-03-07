import axios from "axios";
import React, { useEffect, useState } from "react";
import ArtCard from "../components/ArtCard";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

const API = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

// const denemearray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const denemearray = [457, 4656, 5678, 567, 123, 345, 57, 7890, 7756];

const Main = () => {
  // const [artWorks, setArtWorks] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // function getArtWorks() {
  //   setLoading(true);

  //   axios
  //     .get(API)
  //     .then((res) => {
  //       console.log(res?.data?.objectIDs);
  //       setArtWorks(res?.data?.objectIDs);
  //       setData((data) => [...data, res.data]);
  //       // getSpecificArtWork();
  //       setLoading(false);
  //     })
  //     // .then(artWorks.slice(0, 10).forEach((id) => getSpecificArtWork(id)))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   setLoading(false);
  // }

  const getSpecificArtWork = async () => {
    setLoading(true);
    denemearray.forEach((id) =>
      axios
        .get(API + "/" + id)
        .then((res) => {
          console.log(res.data);
          setData((data) => [...data, res.data]);
        })
        .catch((error) => {
          console.log(error);
        })
    );
    setLoading(false);
  };

  useEffect(() => {
    // getArtWorks(API);
    getSpecificArtWork();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  if (loading) {
    console.log(loading);
    // return <h1>HELLO</h1>;
  }

  return (
    <>
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
