import React from "react";
import Navbar from "../navbar";
import Searhbar from "./Searhbar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <div>
      <Topbar />
      <Searhbar />
      <Navbar />
    </div>
  );
};

export default Header;
