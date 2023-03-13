import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ArtCard from "../components/ArtCard";
import coverPhoto from "../assets/coverPhoto.png";

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

  //? bu her bir sanat eserinin ID'sini getirir
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

  //? burada elde ettiğimiz ID Array'ini iterasyona tutarak her bir sanat eserini alıyoruz
  const getSearchedArts = (arr) => {
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
          <div style={{ marginTop: "8rem" }}></div>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
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
