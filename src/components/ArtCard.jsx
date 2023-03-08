import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const ArtCard = ({
  artistDisplayName,
  artistBeginDate,
  artistEndDate,
  artistGender,
  artistDisplayBio,
  artistNationality,
  objectID,
  objectBeginDate,
  objectEndDate,
  classification,
  geographyType,
  city,
  state,
  country,
  region,
  dimensions,
  title,
  primaryImage,
  primaryImageSmall,
  additionalImages,
  department,
  period,
}) => {
  const navigate = useNavigate();

  const handleFavorite = (e) => {
    console.log(e.target);
  };

  return (
    <div className="movie">
      <div onClick={() => navigate("details/" + objectID)}>
        <img
          loading="lazy"
          src={primaryImage ? primaryImage : defaultImage}
          alt="art-work"
        />
        <h1>{title}</h1>
        <h2>{artistDisplayName ? artistDisplayName : "Unkown artist"}</h2>
        <h4>{dimensions}</h4>
      </div>
      <div>
        <FavoriteBorderIcon onClick={handleFavorite} />
      </div>
    </div>
  );
};

export default ArtCard;
