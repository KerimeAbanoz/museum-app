import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "10px",
        zIndex: 1,
      }}
    >
      <AppBar position="static" style={{ background: "#263963" }}>
        <Toolbar>
          <button
            onClick={() => navigate("/")}
            variant="h6"
            style={{
              color: "white",
              background: "transparent",
              padding: "1rem 2rem 1rem 0",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Metropolitan Museum of Art Collection
          </button>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <button
              style={{
                color: "white",
                background: "transparent",
                padding: "1rem",
                border: "none",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              size="large"
              edge="end"
              onClick={() => navigate("favourites")}
            >
              Favourites
            </button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
