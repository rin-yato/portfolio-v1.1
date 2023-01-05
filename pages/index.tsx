import React from "react";
import DKFeatureCard from "../components/DKFeatureCard";
import DKPreview from "../components/DKPreview";
import DKTechnologies from "../components/DKTechnologies";
import Experiences from "../components/Experiences";
import HeroText from "../components/HeroText";
import IntroToDK from "../components/IntroToDK";
import RecentAccomplishments from "../components/RecentAccomplishments";
import Technologies from "../components/Technologies";
import Image from "next/image";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { motion } from "framer-motion";
import Animation from "../FramerMotion/Animation";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function index({ open, setOpen }: Props) {
  return (
    <main className={`pb-20  ${open ? "overflow-hidden h-screen" : ""}`}>
      <section className="lg:px-28 xl:px-[15%]">
        <HeroText />
      </section>
      <section className="flex flex-col mt-36 lg:flex-row lg:justify-between lg:px-14 xl:px-[15%]">
        <RecentAccomplishments />
        <Experiences />
        <Technologies />
      </section>
      <section className="mt-36">
        <motion.div
          whileInView={{ transition: { staggerChildren: 0.3 } }}
          className="lg:flex lg:justify-between lg:items-center  lg:px-28 xl:px-[15%]"
        >
          <IntroToDK />
          <DKTechnologies />
        </motion.div>
        <div>
          <div className="lg:w-10/12 py-16 mt-28 lg:mx-auto overflow-hidden">
            <Image
              src={require("../public/web/002.png")}
              alt="idk"
              className="scale-150 md:scale-100"
              priority
            />
          </div>
          <DKPreview />
          <div className="lg:flex px-8 md:px-20 lg:px-[10%] mt-28 pb-36 overflow-hidden lg:gap-[6%]">
            <DKFeatureCard>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={require("../public/web/04.png")}
                  alt="bruhidk"
                  priority
                />
              </div>
              <p className="text-sm text-center pt-7 text-slate-600">
                Filter through price range, cheapest to most expensive or new
                arrivals and popular products.
              </p>
            </DKFeatureCard>
            <DKFeatureCard>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={require("../public/web/05.png")}
                  alt="bruhidk"
                  priority
                />
              </div>
              <p className="text-sm text-center pt-7 text-slate-600">
                Search for products by name, brand, category easily and quickly.
              </p>
            </DKFeatureCard>
            <DKFeatureCard>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={require("../public/web/06.png")}
                  alt="bruhidk"
                  priority
                />
              </div>
              <p className="text-sm text-center pt-7 text-slate-600">
                View product details, related products, and reviews, one click
                to contact the seller.
              </p>
            </DKFeatureCard>
          </div>
          <div className="lg:w-10/12 p-10 lg:p-16 lg:mx-auto overflow-hidden">
            <Image
              src={require("../public/web/003.png")}
              alt="idk"
              className="scale-150 md:scale-100 rounded-lg lg:-translate-x-14"
              priority
            />
          </div>
          <p className="font-[400] text-center py-16 text-3xl">Interested?</p>
          <div className="flex justify-center font-[300] text-3xl leading-[3.5rem] px-8 md:px-20 lg:px-[12.5%] md:text-4xl lg:text-6xl xl:text-7xl lg:lead-[5rem] xl:leading-[8rem] lg:mt-28 pb-28 lg:pb-52">
            <a
              href="https://t.me/rinyato"
              className="underline underline-offset-8 pl-5 font-[400]"
            >
              My Telegram{" "}
              <ArrowForwardOutlinedIcon className="animate-pulse text-3xl pb-1 md:text-4xl lg:text-6xl xl:text-7xl" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default index;
