import React from "react";
import Setting from './assets/Set.svg';
import Sound from './assets/sound.svg';

const Footer = () => {
  return (
    <footer className="p-4flex items-center justify-between">
      <img src={Setting} alt="Settings" className="h-8 w-18 ml-20" />
      
      <div className="flex justify-center items-center space-x-16">
        <button className="bg-button hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-l">
          {'<'}
        </button>
        {/* Any additional buttons would go here */}
        <button className="bg-button hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-r">
          {'>'}
        </button>
      </div>
      
      <img src={Sound} alt="Sound" className="h-10 w-10 mr-20" />
    </footer>
  );
};

export default Footer;
