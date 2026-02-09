import React from "react";
import { FaPlay } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen pt-[15%] px-24  absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-20">
      <h1 className="text-4xl text-white font-bold">{title}</h1>
      <p className="py-6  text-white text-sm  w-1/4">{overview}</p>

      <div className="flex gap-2">
        <button className="p-4 px-12 gap-2 bg-white flex items-center text-black text-lg text-bold rounded-lg hover:bg-opacity-80">
          <FaPlay size={18} /> <span>Play</span>
        </button>
        <button className="mx-2 p-4 px-12 flex items-center gap-2 bg-gray-500  text-white text-lg text-bold bg-opacity-50 rounded-lg">
          <CiCircleInfo size={22} /> <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
