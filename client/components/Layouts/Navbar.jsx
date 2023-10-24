import React from "react";
import { Search } from "./Navbar/Search";

export const Navbar = () => {
  return (
    <div className="flex h-[10%] p-2">
      <div className="flex justify-center p-2 w-2/3">
        <Search />
      </div>
      <div className="w-1/3 bg-slate-500">
        <h1>GradeSpace.</h1>
      </div>
    </div>
  );
};
