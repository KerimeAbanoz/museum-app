import React from "react";
import { useNavigate } from "react-router-dom";

// const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const ArtCard = ({
  accessionNumber,
  artistDisplayName,
  additionalImages,
  department,
  objectDate,
  objectID,
  dimensions,
  accessionYear,
  title,
}) => {
  const navigate = useNavigate();

  return (
    <div className="movie" onClick={() => navigate("details/" + objectID)}>
      <h1>{title}</h1>
      <h2>{dimensions}</h2>
      <img
        loading="lazy"
        src={additionalImages ? additionalImages : defaultImage}
        alt="art-work"
      />
    </div>
  );
};

export default ArtCard;
