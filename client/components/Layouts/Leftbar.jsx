import React from "react";

export const Leftbar = () => {
  const list = ["Dashboard", "Subject", "Student", "Grade"];
  return (
    <div className="container p-4 bg-[#132043] h-screen w-1/5 rounded-r-2xl">
      <div className="container mb-3">
        <h1 className="text-white font-medium text-2xl">GradeSpace.</h1>
      </div>
      <ul className="text-black p-4">
        {list.map((el) => (
          <li>
            <button className="p-4 my-4 bg-white border font-medium text-lg rounded-lg border-neutral-700 w-full hover:bg-red-300">
              {el}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
