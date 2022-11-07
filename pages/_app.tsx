import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState<boolean>(false);
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
  open ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
  return (
    <div className={`bg-[#F6F6F6]`}>
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
