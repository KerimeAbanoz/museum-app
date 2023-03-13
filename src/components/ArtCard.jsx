import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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

  const { id } = useParams();
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleAddToFavorites = (item) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div
      style={{
        backgroundColor: "transparent",
        borderRadius: "3px",
        boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        margin: "1rem",
        width: "300px",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div onClick={() => navigate("/details/" + objectID)}>
        <img
          style={{ objectFit: "cover", height: "400px", maxWidth: "100%" }}
          loading="lazy"
          src={primaryImage ? primaryImage : defaultImage}
          alt="art-work-image"
        />
        <h3>{title}</h3>

        <h5>
          {artistDisplayName ? artistDisplayName : country},{objectBeginDate}
        </h5>
      </div>
      <div>
        <FavoriteBorderIcon onClick={(item) => handleAddToFavorites()} />
      </div>
    </div>
  );
};

export default ArtCard;
