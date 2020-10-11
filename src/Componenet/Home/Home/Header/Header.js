import React from "react";
import Navbar from "../../../Sheard/Navbar/Navbar";
import MainHeader from "../MainHeader/MainHeader";
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
