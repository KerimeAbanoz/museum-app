import React from "react";
import { useNavigate } from "react-router-dom";

const DepartmentCard = ({ departmentId, displayName }) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const navigate = useNavigate();
  return (
    <div key={departmentId}>
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
        <div onClick={() => navigate("department/" + departmentId)}>
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
          <h5>{displayName}</h5>
        </div>
        {/* <div>
        <FavoriteBorderIcon
          onClick={(item) => handleAddToFavorites()}
        />
      </div> */}
      </div>
    </div>
  );
};

export default DepartmentCard;
