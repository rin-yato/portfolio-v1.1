import React from "react";

function Experiences() {
  return (
    <div className="px-8 md:px-20 lg:px-0 my-10" data-scroll >
      <div className="flex flex-col">
        <h2 className="font-[400] text-sm mb-5 uppercase tracking-wider">
          Experiences <span className="text-indigo-600">:</span>
        </h2>
        <div className="flex flex-col gap-4 text-sm text-slate-600 capitalize">
          
          <h3>Full Stack Dev</h3>
          <h3>NFT contract and Minting Site</h3>
          <h3>React Three Fiber</h3>
          <h3>Building a portfolio</h3>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
