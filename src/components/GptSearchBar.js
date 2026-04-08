import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 rounded-lg col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-700 text-white px-4 py-2 m-4 rounded-lg font-bold col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
