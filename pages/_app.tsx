import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import MobileNavDrawer from "../components/MobileNavDrawer";
import Preloader from "../components/Preloader";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [locomotiveScrollRef] = useLocomotiveScroll({
    ref: scrollRef,
    smooth: true,
  });

  useEffect(() => {
    locomotiveScrollRef?.update();
  }, [router.route, router.asPath, router.isReady, router.reload, loading]);

  useEffect(() => {
    if (loading || open) {
      locomotiveScrollRef?.stop();
    } else {
      locomotiveScrollRef?.start();
    }
  }, [loading, open]);

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

  return (
    <main>
      <Head key={"head"}>
        <title>RinYato | Portfolio</title>
        <meta name="description" content="rinyato portfolio" />
        <meta
          name="content"
          content="rinyato, web developer, web designer, UI/UX, cambodia, khmer"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={`bg-[#F6F6F6]`} ref={scrollRef} data-scroll-container>
        <AnimatePresence mode="wait">
          {loading && <Preloader loading={loading} setLoading={setLoading} />}
          {open && (
            <MobileNavDrawer
              open={open}
              setOpen={setOpen}
              key={"MobileNavDrawer"}
            />
          )}
        </AnimatePresence>
        <Header open={open} setOpen={setOpen} />
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => {
              locomotiveScrollRef?.update();
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            variants={FramerMotionPageTransition}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* </ScrollContainer> */}
    </main>
  );
}
