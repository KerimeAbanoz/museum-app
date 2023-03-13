import React, { useState, useEffect } from "react";
import coverPhoto from "../assets/coverPhoto.png";
import axios from "axios";

const Favourites = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    if (favorites.some((fav) => fav.id === product.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <div>
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
      <h2>All items</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
