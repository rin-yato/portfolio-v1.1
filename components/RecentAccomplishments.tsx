import React from "react";

function RecentAccomplishments() {
  return (
    <div className="px-8 md:px-20 lg:px-0 my-10 " data-scroll>
      <div className="flex flex-col">
        <h2 className="font-[400] text-sm mb-5 uppercase tracking-wider">
          Recent Accomplishments <span className="text-indigo-600">:</span>
        </h2>
        <div className="flex flex-col gap-4 text-sm text-slate-600 capitalize">
          <h3>Learnt Typescript</h3>
          <h3>Built DailyKicks website</h3>
          <h3>Next.js and Framer Motion</h3>
          <h3>Nuxt.js and TailwindCss</h3>
        </div>
      </div>
    </div>
  );
}

export default RecentAccomplishments;
