import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import formPhoto from "../assets/formPhoto.png";

const Favourites = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${formPhoto})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "40vh",
          display: "flex",
          justifyContent: "center",
          padding: "0.5rem",
        }}
      >
        <h2>All items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favourites;
