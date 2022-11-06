import React from "react";

function Experiences() {
  return (
    <div className="px-8 md:px-20 lg:px-0 xl:px-[130px] xl:pr-[280px] my-10">
      <div className="flex flex-col lg:flex-row">
        <h2 className="font-[400] text-sm mb-5 uppercase tracking-wider">
          Experiences <span className="text-indigo-600">:</span>
        </h2>
        <div className="flex flex-col gap-4 text-sm text-slate-600 capitalize">
          <h3>Building a portfolio</h3>
          <h3>Building POS system</h3>
          <h3>Creating an E-Commerce</h3>
          <h3>Making a tic tac toe game</h3>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
