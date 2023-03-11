import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchResult = () => {
  const [search, setSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const searchAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
  const itemAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

  useEffect(() => {
    getArtWorkBySearch(searchAPI + searchValue);
  }, []);

  const getArtWorkBySearch = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => {
        // setSearch((data) => [...data, res.data?.objectIDs]);
        setSearch(res.data.objectIDs);
        console.log(res.data.objectIDs);

        // setData((denemearray) => res.data.objectIDs);
        // console.log(denemearray);
        // getSpecificArtWork();
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  return <div>SearchResult</div>;
};

export default SearchResult;
