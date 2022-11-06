import React from "react";

function IntroToDK() {
  return (
    <div className="px-8 md:px-20 lg:px-0 my-10 lg:w-1/3">
      <div className="flex flex-col">
        <h2 className="font-[400] text-base mb-5 uppercase tracking-wider">
          Daily Kicks
        </h2>
        <div className="flex flex-col gap-4 text-[16px] text-slate-600">
          <h3 className="leading-6">
            DailyKicks was built with simplicity in mind, which makes it easy to
            use. It is also built with the latest technologies, making it
            extremely fast and responsive.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default IntroToDK;
