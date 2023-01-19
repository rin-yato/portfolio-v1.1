import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Preloader from "../components/Preloader";
import Head from "next/head";
import Lenis from "@studio-freight/lenis";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [skew, setSkew] = useState<number>(0);

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
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    //get scroll value
    lenis.on(
      "scroll",
      ({ scroll, limit, velocity, direction, progress }: any) => {
        setSkew(
          (velocity / (window.innerWidth < 440 ? window.innerWidth : 550)) *
            75.5
        );
        console.log(velocity, skew);
      }
    );

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence mode="sync">
      {loading && <Preloader loading={loading} setLoading={setLoading} />}
      <div
        className={`bg-[#F6F6F6]`}
        style={{ transform: `skewY(${skew}deg)` }}
      >
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
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={FramerMotionPageTransition}
        >
          <Component {...pageProps} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
