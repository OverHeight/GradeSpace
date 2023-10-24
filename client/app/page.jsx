import { Leftbar } from "@/components/Layouts/Leftbar";
import { Navbar } from "@/components/Layouts/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-neutral-200 h-screen">
      <div className="flex h-[92vh]">
        <Leftbar />
        {/* Section 1 */}
        <div className="flex-row w-full h-screen">
          <Navbar />
          <div className="flex p-2">content</div>
        </div>
      </div>
    </div>
  );
};

export default page;
