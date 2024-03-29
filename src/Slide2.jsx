import React from "react";
import Header2 from "./Header2";
import Beach from "./assets/beach.svg";
import Rectangle from "./assets/Rectangle.svg";
import Mask from "./assets/Mask.svg";
import Text1 from "./assets/text1.svg";
import Text2 from "./assets/text2.svg";
import Hint from "./assets/Hint.svg";
import Line from "./assets/line.svg";

const Slide2 = () => {
  return (
    <>
      <main className="bg-white text-gray-800 p-5 rounded-lg  max-w-7xl flex flex-col items-center">
        <p className="w-full font-bold">
          Can you figure out the definition of setting from the following examples?
        </p>
        <p className="w-full">(take a minute to think about this)</p>
        <div className="flex justify-around w-full">
          <div className="relative h-84 w-84">
            <img src={Rectangle} alt="Frame" className="h-full w-full" />
            <div className="absolute inset-1 flex items-center justify-center h-full w-full">
              <img src={Beach} alt="Inner Content" className="max-h-full max-w-full" />
            </div>
          </div>
          <div className="relative h-15 w-15">
            <img src={Rectangle} alt="Frame" className="h-full w-full" />
            <div className="absolute inset-1 flex items-center justify-center h-full w-full">
              <img src={Mask} alt="Inner Content" className="max-h-full max-w-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full mt-4">
          <img src={Text1} alt="Text 1" className="h-15 w-15" />
          <img src={Text2} alt="Text 2" className="h-15 w-15" />
        </div>
        <p className="w-full">
          So, what do you think the definition of setting is?
        </p>
        <div className="w-full flex justify-center items-center">
          <p className="shortface mr-2 w-full ">Any guesses?</p>
          <img src={Line} alt="Line" style={{ height: "3.2px" }} className="w-auto" />
          <p className="ml-2 w-full">Hint:</p>
          <img src={Hint} alt="Hint" className="h-15 w-15" />
        </div>
        <div className="bg-Box text-white w-full py-2 px-4 flex justify-between items-center rounded">
          <p className="text-lg w-full">
            There are elements which make the foundation for story writing. An
            element is an essential part of something and every fiction story
            has the same key elements:
          </p>
        </div>
        <p>
          The time of the story could be in the past, future, day, night, summer
          or winter. A story may take place in a school, a mall, a desert, an
          airplane, or in a variety of other places.
        </p>
      </main>
      
    </>
    
  );
};

export default Slide2;
