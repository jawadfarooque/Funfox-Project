// Header.js
import React from "react";
import Funfox from "./assets/funfox.svg";

const Header2 = () => {
  return (
    <div className="flex items-start">
      <img src={Funfox} className="h-30 w-auto" alt="Funfox Logo" /> 
    </div>
  );
};

export default Header2;
