import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const FramerMotionPageTransition = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div className={`bg-[#F6F6F6]`}>
      {loading && <Preloader loading={loading} setLoading={setLoading} />}
      <Header open={open} setOpen={setOpen} />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          whileInView="whileInView"
          whileTap="whileTap"
          whileHover="whileHover"
          variants={FramerMotionPageTransition}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
