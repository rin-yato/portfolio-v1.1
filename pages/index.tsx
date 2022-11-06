import React from "react";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import HeroText from "../components/HeroText";
import RecentAccomplishments from "../components/RecentAccomplishments";
import Technologies from "../components/Technologies";

function index() {
  return (
    <div className="pb-20">
      <div className="lg:px-28 xl:px-[15%]">
        <HeroText />
      </div>
      <div className="flex flex-col mt-36 lg:flex-row lg:justify-between lg:px-14 xl:px-[15%]">
        <RecentAccomplishments />
        <Experiences />
        <Technologies />
      </div>
    </div>
  );
}

export default index;
