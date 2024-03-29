// Header.js
import React from "react";
import Funfox from "./assets/funfox.svg";
import Week from "./assets/week.png";

const Header = () => {
  return (
    <div className="flex items-start">
      {" "}
      {/* This ensures that children align at the start (top) of the container */}
      <img src={Funfox} className="h-20 w-auto" alt="Funfox Logo" />
      {/* Adjust size as needed and maintain aspect ratio */}
      <img src={Week} className="h-9 w-auto self-start" alt="Week Logo" />
      {/* 'self-start' aligns this specific item at the start (top) */}
    </div>
  );
};

export default Header;
