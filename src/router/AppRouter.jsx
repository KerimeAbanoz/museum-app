import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Favourites from "../pages/Favourites";
import Department from "../pages/Department";
import SearchResult from "../pages/SearchResult";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/department/:id" element={<Department />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
