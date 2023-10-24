import React from "react";
import { CiSearch } from "react-icons/ci";

export const Search = () => {
  return (
    <div className="flex gap-4">
      <input
        className="w-full text-lg p-2 px-6 rounded-full border-b-4 border-2 border-neutral-900 drop-shadow-sm"
        type="text"
        name="search"
        placeholder="Search here"
      />
      <div className="bg-[#FFBE26] w-14 flex justify-center items-center px-2 rounded-full border-2 border-neutral-900">
        <CiSearch size={30} />
      </div>
    </div>
  );
};
