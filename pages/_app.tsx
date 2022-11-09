import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Preloader from "../components/Preloader";
import Head from "next/head";
import useWindowResize from "../hooks/useWindowResize";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  let size = useWindowResize();
  const app = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);

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
      ? scrollContainer.current!.classList.add("overflow-hidden")
      : scrollContainer.current!.classList.remove("overflow-hidden");

    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current?.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  const config = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const smoothScroll = () => {
    config.current = window.scrollY;
    config.previous += (config.current - config.previous) * config.ease;
    config.rounded = Math.round(config.previous * 100) / 100;

    const difference = config.current - config.rounded;
    const acceleration = difference / size.width!;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current!.style.transform = `translate3d(0, -${config.rounded}px, 0) skewY(${skew}deg)`;
    requestAnimationFrame(() => smoothScroll());
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  });

  return (
    <div
      ref={app}
      className={`bg-[#F6F6F6] app fixed left-0 top-0 h-full w-full overflow-hidden`}
    >
      <div ref={scrollContainer} className="scrollContainer">
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
        {/* {loading && <Preloader loading={loading} setLoading={setLoading} />} */}
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
    </div>
  );
}
