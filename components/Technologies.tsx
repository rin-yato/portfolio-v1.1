import React from "react";

function Technologies() {
  return (
    <div className="px-8 md:px-20 lg:px-0 my-10">
      <div className="flex flex-col">
        <h2 className="font-[400] text-sm mb-5 uppercase tracking-wider">
          What I work With <span className="text-indigo-600">:</span>
        </h2>
        {/* <div className="hidden lg:flex">
          <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 capitalize">
            <h3>Vue</h3>
            <h3>Next.js</h3>
            <h3>Sanity.io</h3>
            <h3 className=" lg:hidden">Bootstrap</h3>
            <h3>React</h3>
            <h3>Nuxt.js</h3>
            <h3>Tailwindcss</h3>
            <h3>Material UI</h3>
            <h3>Laravel</h3>
            <h3>FramerMotion</h3>
          </div>
        </div> */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-600 capitalize">
          <h3>React</h3>
          <h3>Sanity.io</h3>
          <h3>Vue</h3>
          <h3 className=" lg:hidden">Bootstrap</h3>
          <h3>Laravel</h3>
          <h3>Tailwindcss</h3>
          <h3>Next.js</h3>
          <h3>Material UI</h3>
          <h3>Nuxt.js</h3>
          <h3>FramerMotion</h3>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
