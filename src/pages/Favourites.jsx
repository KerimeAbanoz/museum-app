import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

const Favourites = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  return (
    <div>
      <div>
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
