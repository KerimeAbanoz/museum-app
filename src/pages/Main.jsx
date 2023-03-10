import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import useGetWorks from "../hooks/useGetWorks";
import coverPhoto from "../assets/coverPhoto.png";
import { useNavigate } from "react-router-dom";

const departmentAPI =
  "https://collectionapi.metmuseum.org/public/collection/v1/departments";
const searchAPI =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

// const denemearray = [4577, 4656, 5678, 567, 123, 345, 57, 7890, 7756];

const Main = () => {
  const [data, setData] = useState([]);
  // const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  useGetWorks(query, pageNumber);

  // const [dataIds, setDataIds] = useState([]);
  useEffect(() => {
    getDepartments(departmentAPI);

    // getSpecificArtWork();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const getDepartments = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => {
        // setDataIds((dataIds) => res.data);
        // setData((data) => [...data, res.data]);
        // setData(res?.data.department);
        setData(res.data.departments);
        // console.log(data);
        // console.log(res.data.objectIDs);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  };

  // const getSpecificArtWork = async () => {
  //   setLoading(true);
  //   denemearray.forEach((id) => {
  //     // console.log(id);
  //     axios
  //       .get(API + "/" + id)
  //       .then((res) => {
  //         // console.log(res.data);
  //         setData((data) => [...data, res.data]);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     setLoading(false);
  //   });
  // };

  // const getArtWorkBySearch = async () => {
  //   setLoading(true);
  //   axios
  //     .get(searchAPI + searchValue)
  //     .then((res) => {
  //       // console.log(res?.data?.total);
  //       setData((data) => [...data, res.data?.objectIDs]);
  //       // setData((denemearray) => res.data.objectIDs);
  //       // console.log(denemearray);
  //       // getSpecificArtWork();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   setLoading(false);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getArtWorkBySearch(searchAPI + searchValue);
  //   console.log(searchValue);
  // };

  // const handleSearch = (e) => {
  //   setQuery(e.target.value);
  //   setPageNumber(1);
  // };

  return (
    <div>
      <form
        style={{
          backgroundImage: `url(${coverPhoto})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "40vh",
          display: "flex",
          justifyContent: "center",
          padding: "0.5rem",
        }}
        // onSubmit={(e) => handleSubmit(e)}
      >
        <div style={{ marginTop: "8rem" }}>
          <input
            type="text"
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
            // value={searchValue}
            // onChange={(e) => setSearchValue(e.target.value)}
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
        {/* {data?.map((work) => (
          <ArtCard key={work.id} {...work} />
        ))} */}
        {data?.map((eachData) => (
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
                  alt="Department-image"
                />
                <h5>{eachData.displayName}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
