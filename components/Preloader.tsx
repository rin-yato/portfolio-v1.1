import React from "react";
import { motion } from "framer-motion";
import Transition from "../FramerMotion/Transition";
import Animation from "../FramerMotion/Animation";

type Props = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function Preloader({ loading, setLoading }: Props) {
  const [loadingTime, setLoadingTime] = React.useState<number>(0);
  React.useEffect(() => {
    if (loadingTime < 130) {
      setTimeout(() => {
        setLoadingTime(loadingTime + 1);
      }, 20);
    }
  }, [loadingTime]);

  React.useEffect(() => {
    if (loadingTime === 100) {
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
  }, [loadingTime]);

  return (
    <motion.div
      transition={{ duration: 1, ease: Transition.ease4, delay: 1 }}
      exit={{ y: "-130vh", skewY: 3 }}
      className={`fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center`}
    >
      <motion.div>
        <div className={`text-white text-5xl py-10 overflow-hidden`}>
          <motion.div
            initial={{ y: "200%", skewY: 10 }}
            animate={{
              y: 0,
              skewY: 0,
            }}
            exit={{
              y: "230%",
              skewY: 10,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Site is loading...
          </motion.div>
        </div>
        <div className={`khmer text-white pl-2 text-2xl overflow-hidden`}>
          <motion.div
            initial={{ y: "200%", skewY: 8 }}
            animate={{
              y: 0,
              skewY: 0,
            }}
            exit={{
              y: "200%",
              skewY: 8,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            ចាំតិច ហើយឡូវហើយ!
          </motion.div>
        </div>
      </motion.div>
      <div className="fixed left-10 bottom-10 text-white text-3xl md:text-5xl lg:text-7xl mt-5 lg:mt-36">
        %{loadingTime <= 100 ? loadingTime : "100"}
      </div>
    </motion.div>
  );
}

export default Preloader;
