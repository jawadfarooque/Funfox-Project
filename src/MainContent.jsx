// MainContent.js

import React from "react";
import Vector from "./assets/vector.svg";
import Icon1 from "./assets/Settings.svg";
import Icon2 from "./assets/Characters.svg";
import Icon3 from "./assets/PLOT.svg";
import Icon4 from "./assets/problem.svg";
import Icon5 from "./assets/resolution.svg";
import Box from "./assets/box.svg";
import Header from "./Header";

import Footer from "./Footer";
import Setting from "./assets/Set.svg";
import Sound from "./assets/sound.svg";
const MainContent = () => {
  const svgHeight = "h-32"; // Example height, adjust this to fit your SVG
  const svgWidth = "w-full";
  
  return (
      <div className="flex flex-col">
        <main className="bg-white text-gray-800 p-5 rounded-lg  max-w-15xl flex flex-col items-center justify-center">
          <div className="bg-primary text-white px-10 py-2 rounded-full">
            <h1 className="text-2xl font-bold">Elements of Story Writing</h1>
          </div>
          <p className="w-full">
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey?
          </p>
          <p className="w-full">
            Over the next week, we will be practicing the different elements of
            story writing.
          </p>
          <p className="w-full">
            Our aim is to make stories more interesting and exciting.
          </p>
          <div className="bg-Box text-white w-full py-2 px-4 flex justify-between items-center rounded">
            <span className="text-lg w-full">
              There are elements which make the foundation for story writing. An
              element is an essential part of something and every fiction story
              has the same key elements:
            </span>
            <img src={Vector} alt="Icon" className="h-15 w-15" />
          </div>
          <div className="flex justify-around w-full mt-4">
            <img src={Icon1} alt="Icon 1" className="h-15 w-15" />
            <img src={Icon2} alt="Icon 2" className="h-15 w-15" />
            <img src={Icon3} alt="Icon 3" className="h-15 w-15" />
            <img src={Icon4} alt="Icon 4" className="h-15 w-15" />
            <img src={Icon5} alt="Icon 5" className="h-15 w-15" />
          </div>
          <p className="w-full">
            You must be familiar with some of these. If not, do not worry! we
            will cover all these elements as we go along.
          </p>
          <div className="w-full">
            <image src={Box} />
          </div>
          <div className="flex justify-center items-center">
            <div
              className={`relative ${svgWidth} ${svgHeight} bg-no-repeat bg-center bg-contain inline-block`}
              style={{ backgroundImage: `url(${Box})` }}
            >
              <p className="text-black p-2 mr-7 ml-10">
                For today’s lesson, we will try to understand and practice
                writing the setting for our stories.
              </p>
              <p className="text-black p-1 ml-10">
                The setting is an important element of every fiction story.
              </p>
            </div>
          </div>
        </main>
      </div>
    
  );
};

export default MainContent;
