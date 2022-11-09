import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Preloader from "../components/Preloader";
import Head from "next/head";
import ScrollContainer from "../components/ScrollContainer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

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
      <ScrollContainer>
        <Header open={open} setOpen={setOpen} />
        <Head key={"head"}>
          <title>RinYato | Portfolio</title>
          <meta name="description" content="rinyato portfolio" />
          <meta
            name="content"
            content="rinyato, web developer, web designer, UI/UX, cambodia, khmer"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
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
      </ScrollContainer>
    </div>
  );
}
