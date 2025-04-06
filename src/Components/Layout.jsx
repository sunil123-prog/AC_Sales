import React from "react";
import Navbar from "../Components/Navbar"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Where nested routes will render */}
    </>
  );
};

export default Layout;
