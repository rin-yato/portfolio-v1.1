import React from "react";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import HeroText from "../components/HeroText";
import RecentAccomplishments from "../components/RecentAccomplishments";
import Technologies from "../components/Technologies";

function index() {
  return (
    <div className="lg:px-28 xl:px-[15%] pb-20">
      <HeroText />
      <div className="flex flex-col mt-36">
        <RecentAccomplishments />
        <Experiences />
        <Technologies />
      </div>
    </div>
  );
}

export default index;
