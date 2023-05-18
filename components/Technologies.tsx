import React from "react";

function Technologies() {
  return (
    <div className="px-8 md:px-20 lg:px-0 my-10" data-scroll>
      <div className="flex flex-col">
        <h2 className="font-[400] text-sm mb-5 uppercase tracking-wider">
          What I work With <span className="text-indigo-600">:</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-600 capitalize">
          <h3>React Native</h3>
          <h3>tRPC</h3>
          <h3>Primsa</h3>
          <h3 className=" lg:hidden">Docker</h3>
          <h3>Nest.js</h3>
          <h3>Tailwindcss</h3>
          <h3>Next.js</h3>
          <h3>Web3</h3>
          <h3>Nuxt.js</h3>
          <h3>ThreeJS</h3>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
