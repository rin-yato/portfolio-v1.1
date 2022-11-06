import Transition from "./Transition";

const duration = 0.4;

const Animation = {
  Fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: duration, ease: Transition.ease4 },
  },
  SlideUpFromBottom: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
    transition: { duration: duration, ease: Transition.ease4 },
  },
  SlideDownFromTop: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: { duration: duration, ease: Transition.ease4 },
  },
  NavBarDrawer: {
    initial: { y: "-100%" },
    animate: { y: 0, transition: { duration: 0.4, ease: Transition.ease4 } },
    exit: {
      y: "-100%",
      transition: { delay: 0.5, duration: 0.4, ease: Transition.ease4 },
    },
  },
  SlideLeftFromRight: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: duration, ease: Transition.ease4 },
  },
  SlideRightFromLeft: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: duration, ease: Transition.ease4 },
  },
  ScaleUp: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { duration: duration, ease: Transition.ease4 },
  },
  ScaleDown: {
    initial: { scale: 2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 2, opacity: 0 },
    transition: { duration: duration, ease: Transition.ease4 },
  },
  Stagger: {
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.12,
        staggerDirection: -1,
      },
    },
  },
  TextSlideUpSkew: {
    initial: { y: "100%", skewY: 6 },
    animate: {
      y: 0,
      skewY: 0,
      transition: { duration: 0.3, ease: Transition.ease4 },
    },
    exit: {
      y: "100%",
      skewY: 5,
      transition: { duration: 0.13, ease: Transition.ease4 },
    },
  },
};

export default Animation;
