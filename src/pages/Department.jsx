import React, { useState, useEffect } from "react";
import axios from "axios";
import coverPhoto from "../assets/coverPhoto.png";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";

const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const departmentAPI =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=";
const objectAPI =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

const Department = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const getArtWorks = () => {
    setLoading(true);
    axios
      .get(departmentAPI + id + "&q=cat")
      .then((res) => {
        // setData((data) => [...data, res.data?.objectIDs]);
        setData(res.data.objectIDs);
        console.log(res.data.objectIDs);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  const getActualArtwork = () => {
    setLoading(true);
    axios.get(objectAPI + data);
  };

  useEffect(() => {
    getArtWorks();
  }, []);

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
              <div onClick={() => navigate("detail/" + eachData.departmentId)}>
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
    </div>
  );
};

export default Department;
