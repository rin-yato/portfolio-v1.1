import React from "react";
import { motion } from "framer-motion";
import { once } from "events";
import Transition from "../FramerMotion/Transition";

function IntroToDK() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: .5, ease: Transition.ease4 }}
      viewport={{ once: true }}
      className="px-8 md:px-20 lg:px-0 my-10 lg:w-1/3"
    >
      <div className="flex flex-col">
        <h2 className="font-[400] text-base mb-5 uppercase tracking-wider">
          Project :
          <span className="text-indigo-600 font-medium"> Daily Kicks</span>
        </h2>
        <div className="flex flex-col gap-4 text-[16px] text-slate-600">
          <h3 className="leading-6">
            DailyKicks was built with simplicity in mind, which makes it easy to
            use. It is also built with the latest technologies, making it
            extremely fast and responsive.
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default IntroToDK;
