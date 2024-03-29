import { React, useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import LeftCorner from "./Corner";
import RightCorner from "./RightCorner"; // Assuming this component renders the corner icons
import "./Font.css";
import Slide2 from "./Slide2";

import Setting from "./assets/Set.svg";
import Sound from "./assets/sound.svg";
import Header2 from "./Header2";

function App() {
  const [selectedPage, setSelectedPage] = useState("main");
  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  return (
    <div className="flex flex-col bg-pink-200 p-2">
      {selectedPage == "main" && <Header/>}
      {selectedPage == "slide2" && <Header2/>}
      <div className="flex flex-1 justify-center items-center relative">
        <LeftCorner className="absolute left-0 top-0" />
        {selectedPage === "main" && <MainContent />}
        {selectedPage === "slide2" && <Slide2 />}
        <RightCorner className="absolute right-0 top-0" />
      </div>
      <footer className="p-4 flex items-center justify-between">
        <img src={Setting} alt="Settings" className="w-10 ml-20" />

        <div className="flex justify-center items-center space-x-16">
          <button
            onClick={() => handlePageChange("main")}
            className="bg-button hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-l"
          >
            {"<"}
          </button>
          {/* Any additional buttons would go here */}
          <button
            onClick={() => handlePageChange("slide2")}
            className="bg-button hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-r"
          >
            {">"}
          </button>
        </div>

        <img src={Sound} alt="Sound" className="h-10 w-10 mr-20" />
      </footer>
    </div>
  );
}

export default App;
