import React from "react";

function RecentAccomplishments() {
  return (
    <div className="px-8 md:px-20 lg:px-0 my-10 " data-scroll>
      <div className="flex flex-col">
        <h2 className="font-[400] text-sm mb-5 uppercase tracking-wider">
          Recent Accomplishments <span className="text-indigo-600">:</span>
        </h2>
        <div className="flex flex-col gap-4 text-sm text-slate-600 capitalize">
          <h3>Finished Typescript Advanced Topic</h3>
          <h3>Deep Dive into Mobile Development</h3>
          <h3>Team Lead for Frontend Development</h3>
          <h3>Devops with docker</h3>
        </div>
      </div>
    </div>
  );
}

export default RecentAccomplishments;
