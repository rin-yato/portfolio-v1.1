import React from "react";

function Technologies() {
  return (
    <div className="px-8 md:px-20 lg:px-0 xl:px-[130px] xl:pr-[280px] my-10">
      <div className="flex flex-col lg:flex-row">
        <h2 className="font-[400] text-sm mb-5 uppercase tracking-wider">
          What I work With <span className="text-indigo-600">:</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 capitalize">
          <h3>React</h3>
          <h3>Sanity.io</h3>
          <h3>Vue</h3>
          <h3>Bootstrap</h3>
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
