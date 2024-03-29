import React from "react";
import bag from "./assets/bag.svg";
import ruler from "./assets/Ruler.svg";
import pencil from "./assets/pencil.svg";
import closebook from "./assets/closedbook.svg";
import hat from "./assets/hat.svg";
import openbook from "./assets/openbook.svg";

const Corner = () => {
  return (
    <div className="flex justify-between px-0 pt-0 h-screen mr-20"> {/* Ensure full screen height */}
      <div className="flex flex-col justify-between"> {/* Use full height and justify content */}
        <img src={pencil} alt="Pencil Icon" className="h-20" /> {/* Align with Funfox logo */}
        <img src={bag} alt="Bag Icon" className="h-20" /> {/* Increased space */}
        <img src={openbook} alt="Open Book Icon" className="h-20" /> {/* Align to the bottom */}
      </div>
    </div>
  );
};

export default Corner;
