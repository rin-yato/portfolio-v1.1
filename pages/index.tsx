import React from "react";
import DKPreview from "../components/DKPreview";
import DKTechnologies from "../components/DKTechnologies";
import Experiences from "../components/Experiences";
import HeroText from "../components/HeroText";
import IntroToDK from "../components/IntroToDK";
import RecentAccomplishments from "../components/RecentAccomplishments";
import Technologies from "../components/Technologies";

function index() {
  return (
    <main className="pb-20 ">
      <section className="lg:px-28 xl:px-[15%]">
        <HeroText />
      </section>
      <section className="flex flex-col mt-36 lg:flex-row lg:justify-between lg:px-14 xl:px-[15%]">
        <RecentAccomplishments />
        <Experiences />
        <Technologies />
      </section>
      <section className="mt-36"> 
        <div className="lg:flex lg:justify-between lg:items-center  lg:px-28 xl:px-[15%]">
          <IntroToDK />
          <DKTechnologies/>
        </div>
        <div>
          <DKPreview/>
        </div>
      </section>
    </main>
  );
}

export default index;
