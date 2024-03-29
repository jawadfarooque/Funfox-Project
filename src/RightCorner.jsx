import React from "react";
import ruler from "./assets/Ruler.svg";
import closebook from "./assets/closedbook.svg";
import hat from "./assets/hat.svg";

const RightCorner = () => {
  return (
    <div className="flex justify-between  h-screen ml-20">
      <div className="flex flex-col justify-between"> 
        <img src={ruler} alt="Ruler" className="h-40" />
        <img src={closebook} alt="CloseBook" className="h-40" />
        <img src={hat} alt="Hat" className="h-40" />
      </div>
    </div>
  );
};

export default RightCorner;
