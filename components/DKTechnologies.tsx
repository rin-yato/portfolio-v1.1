import React from "react";

function DKTechnologies() {
  return (
    <div className="px-8 md:px-20 lg:px-0 my-10">
      <div className="flex flex-col pt-3">
        <h2 className="font-[400] text-base mb-5 uppercase tracking-wider">
          Technologies used <span className="text-indigo-600">:</span>
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 text-[16px] text-slate-600">
          <h3 className="leading-6">
            <span className="text-indigo-600 font-[400]">Next.js</span> -
            Overall Framework
          </h3>
          <h3 className="leading-6">
            <span className="text-indigo-600 font-[400]">React</span> - Frontend
          </h3>
          <h3 className="leading-6">
            <span className="text-indigo-600 font-[400]">Sanity.io</span> -
            Backend
          </h3>
          <h3 className="leading-6">
            <span className="text-indigo-600 font-[400]">Material UI</span> - UI
            Library
          </h3>
          <h3 className="leading-6">
            <span className="text-indigo-600 font-[400]">Tailwind CSS</span> -
            Styling
          </h3>
          <h3 className="leading-6">
            <span className="text-indigo-600 font-[400]">FramerMotion</span> -
            Animation
          </h3>
        </div>
      </div>
    </div>
  );
}

export default DKTechnologies;
