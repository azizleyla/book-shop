import React, { useState } from "react";
import Navbar from "../navbar";
import Searhbar from "./Searhbar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <div>
      <Topbar />

      <Navbar />
    </div>
  );
};

export default Header;
