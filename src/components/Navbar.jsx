import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            variant="h6"
            component="div"
            style={{
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
            }}
          >
            Metropolitan Museum of Art Collection
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <button
              style={{
                background: "transparent",
                padding: "1rem 2rem",
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
