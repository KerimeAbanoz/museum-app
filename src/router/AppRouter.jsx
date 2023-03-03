import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import ArtDetail from "../pages/ArtDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/details/:id" element={<PrivateRouter />}> */}
        <Route path="/details/:id" element={<ArtDetail />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
