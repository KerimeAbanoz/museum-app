import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import coverPhoto from "../assets/coverPhoto.png";

const Detail = () => {
  const objectAPI =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

  const [artDetail, setArtDetail] = useState("");
  const [loading, setLoading] = useState(true);
  const { objectID } = useParams();

  const getArtwork = (e) => {
    setLoading(true);
    axios
      .get(objectAPI + e)
      .then((res) => {
        setArtDetail(res.data);
        console.log(artDetail);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  };

  useEffect(() => {
    getArtwork(objectID);
  }, []);

  return (
    <div style={{ position: "relative" }}>
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
      >
        <div style={{ marginTop: "8rem" }}></div>
      </div>

      <Link
        to={-1}
        className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Detail;
