import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import Navbar from "../Navbar/Navbar";
import SerficeInfo from "../serviceInfo/SerficeInfo";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <MainHeader />
      <SerficeInfo />
    </div>
  );
};

export default Header;
